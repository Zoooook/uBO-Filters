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
        element = re.split(' |>', line)[0]
        text = line.split('>')[1]

        attrtext = ' '.join(line.split(' ')[1:]).split('>')[0]
        attrs = {}
        for attr in re.findall('[a-zA-Z_-]+=".*?"', line, re.DOTALL):
            key = attr.split('=')[0]
            if key in ['id', 'class', 'aria-label', 'data-test-selector']:
                attrs[key] = attr.split('"')[1]

        line = element
        if 'id' in attrs:
            line += '#' + attrs['id']
            del attrs['id']
        if 'class' in attrs:
            line += '.' + '.'.join(attrs['class'].split(' '))
            del attrs['class']
        for key, val in attrs.items():
            line += '[' + key + '="' + val + '"]'
        if text:
            line += ':has-text(/^' + text + '$/)'

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