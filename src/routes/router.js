function initRouter(routes) {
  return async (path, ctx) => {
    const routerHandlers = routes[path] || null;

    if (routerHandlers !== null) {
      await routerHandlers.forEach((hanlder) => hanlder(ctx));
    }
  };
}

export default initRouter;
