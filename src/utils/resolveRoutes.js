const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRouter = route === '/' ? route : '/:id';
        return validRouter
    } else {
        return `/${route}`
    }

}

export default resolveRoutes
