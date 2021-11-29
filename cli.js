let cwd = `file://${Deno.cwd()}/`
let [sourceFile, outFile] = Deno.args
let sourcePath = new URL(sourceFile, cwd)
let {files} = await Deno.emit(sourcePath, {bundle: 'module'})
let source = files['deno:///bundle.js']
let map = files['deno:///bundle.js.map']
let reader = new FileReader()
let blob = new Blob([map], {type: 'application/json'})
reader.readAsDataURL(blob)
await new Promise(cb => reader.onload = cb)
source += `//# sourceMappingURL=${reader.result}`
if (!outFile) console.log(source)
else Deno.writeTextFile(new URL(outFile, cwd), source)
