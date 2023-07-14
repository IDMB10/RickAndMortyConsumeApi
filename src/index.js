import router from "./routes/index";

window.addEventListener('load', async () => {
    await router();    
});

window.addEventListener('hashchange', async () => {    
    await router();    
})
