ServerEvents.recipes(event => {
    event.shaped('projecte:watch_of_flowing_time', [
        'DGD', 
        'OVO', 
        'DGD'  
      ], {
        D: 'projecte:dark_matter', 
        V: 'kubejs:void_core',
        G: 'minecraft:glowstone',
        O: 'minecraft:obsidian'
      }
    )
    event.shaped('projecte:collector_mk1', [
        'GLG', 
        'DVD', 
        'GFG'  
      ], {
        V: 'kubejs:void_core',
        G: 'minecraft:glowstone',
        F: 'minecraft:furnace',
        D: 'minecraft:diamond_block',
        L: 'minecraft:glass'
      }
    )
    event.shaped('projectexpansion:basic_collector', [
        'GLG', 
        'DVD', 
        'GAG'  
      ], {
        V: 'kubejs:void_core',
        G: 'minecraft:glowstone',
        A: 'projecte:aeternalis_fuel_block',
        D: 'minecraft:diamond_block',
        L: 'minecraft:glass'
      }
    )
})
ProjectEEvents.setEMC(event => {
  event.setEMC('minecraft:netherite_scrap', 0)
})