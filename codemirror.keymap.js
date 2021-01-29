CodeMirror.Vim.map('<C-j>', '}')
CodeMirror.Vim.map('<C-k>', '{')
CodeMirror.Vim.map('<C-h>', 'b')
CodeMirror.Vim.map('<C-l>', 'e')
CodeMirror.Vim.map('<C-i>', '<Esc><Right>', 'insert')

window.cm = document.querySelector('.CodeMirror').CodeMirror

document.querySelector('.CodeMirror+.CodeMirror').style.display='none'

document.querySelector('article').style.maxWidth='unset'
document.querySelector('article').style.width='90%'
document.querySelector('article').style.margin='0 5%'

document.querySelectorAll('.darkreader').forEach(a=>a.remove())

console.log('CodeMirror keys loaded')
