const resolveRoutes = (route) => {
    if (route.length <= 3) {  //la api solo tiene id hasta 3 cifras
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    } 
    return `/${route}`;  //retornando la ruta /about
}

export default resolveRoutes;