PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('new_join')) {
        event.player.stages.add('new_join')
        event.server.runCommandSilent(`give ${event.entity.username} kubejs:void_core`)
    }
})