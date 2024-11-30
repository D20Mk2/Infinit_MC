StartupEvents.registry('item', event => {
    event.create('void_core').displayName('Пустотное ядро')
    event.create('void_core_shard').displayName('Пустотный Осколок')
})

StartupEvents.registry('item', event => {
	event.create('blue_melon').displayName('Синий арбуз').food(food => {
		food
    		.hunger(10)
    		.saturation(10)
      		.effect('regeneration', 600, 1, 1)
      		.removeEffect('poison')
      		.alwaysEdible()
      		.fastToEat()
	})
})