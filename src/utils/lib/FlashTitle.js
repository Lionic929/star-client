let flashing = null;
let originalTitle = null;

const formats = ['%t', '%n · %t'];

function unflash() {
  if (!flashing) return;

  clearTimeout(flashing);
  document.title = originalTitle;

  flashing = null;
  originalTitle = null;
}

export default (text) => {
  unflash();

  if (!document.hidden) return;

  originalTitle = document.title;

  let i = 0;

  const flash = () => {
    if (!document.hidden) return unflash();

    document.title = formats[i].replace('%n', text).replace('%t', originalTitle);
    i = (i + 1) % formats.length;

    return null;
  };

  flash();
  flashing = setInterval(flash, 1000);
};
