functions=File.open("test/index-test.js").read.scan(/describe[(]['][A-z]+[(][)]/)
# functions=File.open("test/index-test.js").read.scan(/describe[(]['][A-z]+/)
functions.map! do |el|
  "\nfunction #{el[10..-1]} {\n  \n}"
end
index=File.open("index.js", 'w+')
index.write(functions.join(''))


# File.open("test.js", 'w+').write(s.join(''))
# ((File.open("index.js", 'w+')).write
# ((File.open("test/IndexTest.js").read.scan(/describe[(]['][A-z]+[(][)]/)).map!{|el| "\nconst #{el[10..-1]} {\n  \n}"}).close
