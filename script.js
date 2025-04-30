document.getElementById('runCode').addEventListener('click', () => {
    const htmlCode = document.getElementById('htmlEditor').value;
    const cssCode = `<style>${document.getElementById('cssEditor').value}</style>`;
    const jsCode = `<script>${document.getElementById('jsEditor').value}<\/script>`;
    
    const outputFrame = document.getElementById('outputFrame');
    outputFrame.contentDocument.body.innerHTML = htmlCode + cssCode + jsCode;
});