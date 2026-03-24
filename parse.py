import re

html = ""
with open('text.txt', 'r', encoding='utf-8') as infile:
    for line in infile:
        html = html + line

html = re.sub('(?s)<style.*?</style>', '', html)
html = re.sub('(?s)<script.*?</script>', '', html)
html = html[1:].split('<')

stack = []
newHtml = []

def getElement(line):
    match = re.search('[a-z]+', line)
    return match.group(0)

for line in html:
    if line[0] == '/':
        while getElement(line) != getElement(stack[-1]):
            stack.pop()
        stack.pop()
    elif line[0:3] != '!--':
        line = line.split('>')[0]
        line = re.sub('(?s) (?!(class|id))[a-zA-Z_-]+=".*?"', '', line)
        # line = re.sub(' id="(.*?)"', r'#\1', line)
        line = re.sub(' id="(.*?)"', '', line)
        line = re.sub(' class="(.*?)"', r'.\1', line)

        line = '\n'.join([newline for newline in line.split('\n') if newline.strip()])
        line = line.replace(' ', '.')
        line = re.sub(r'\.+', '.', line)
        line = re.sub(r'\.+$', '', line)

        for i in range(2):
            line = re.sub(r'\.[0-9a-zA-Z-]*-sc-[0-9a-zA-Z-]*(\.|$)', r'\1', line)

        newHtml.append(' '*len(stack) + line)
        stack.append(line)

print()

with open('output.txt', 'w') as outfile:
    for line in newHtml:
        outfile.write(line + '\n')
        print(line)

print()