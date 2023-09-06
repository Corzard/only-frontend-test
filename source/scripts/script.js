const _locationButtons = document.getElementsByClassName("location-button");
const _locationBlock = document.getElementById("location-block");
_locationBlock.addEventListener('click', (e) => {
    const _target = e.target;
    if (_target.classList.contains("location-button")) {
        if (_target.classList.contains('active')) {
            CollapseButton(_target);
        } else {
            ExpandButton(_target);
        }
    }
    else {
        Array.from(_locationButtons).forEach(button =>
            CollapseButton(button));
    }
});

const BUTTON_WIDTH_EXPANDED = '100px';
const BUTTON_WIDTH_COLLAPSED = '41px';
const BUTTON_OPACITY_ACTIVE = '1';
const BUTTON_OPACITY_INACTIVE = '0.7';


function ExpandButton(button) {
    button.classList.add('active');
    button.style.width = BUTTON_WIDTH_EXPANDED;
    button.style.opacity = BUTTON_OPACITY_ACTIVE;
    button.innerHTML = '-&nbsp;&nbsp;&nbsp;' + button.getAttribute('data-location');
}
function CollapseButton(button) {
    button.style.width = BUTTON_WIDTH_COLLAPSED;
    button.style.opacity = BUTTON_OPACITY_INACTIVE;
    button.classList.remove('active');
    button.textContent = '+';
}
