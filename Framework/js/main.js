window.requestAnimationFrame = (() => {
return window.requestAnimationFrame
})

const template = new Template;
new AppComponent({
    id: "app",
    template: template.appTemplate
});