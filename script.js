const htmlInput = document.getElementById('html-code');
const cssInput = document.getElementById('css-code');
const jsInput = document.getElementById('js-code');
const preview = document.getElementById('preview');

function updatePreview() {
    const htmlCode = htmlInput.value;
    const cssCode = `<style>${cssInput.value}</style>`;
    const jsCode = `<script>${jsInput.value}</script>`;
    const fullCode = `${htmlCode}${cssCode}${jsCode}`;
    preview.srcdoc = fullCode;
}

htmlInput.addEventListener('input', updatePreview);
cssInput.addEventListener('input', updatePreview);
jsInput.addEventListener('input', updatePreview);

updatePreview();
