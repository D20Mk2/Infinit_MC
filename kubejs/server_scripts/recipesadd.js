ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [
            'kubejs:st1_n', 
            'kubejs:polluted_clay_catalist'
        ], 
        [
            'minecraft:ancient_debris', 
            'kubejs:clay_catalist', 
            Fluid.lava(500), 
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st2_n', 
            'minecraft:bucket', 
            Item.of('kubejs:rare_earth').withChance(0.2)
        ], 
        [
            'kubejs:st1_n', 
            'minecraft:terracotta', 
            Fluid.water(500), 
            'mekanism:sulfuric_acid_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st3_n', 
            'kubejs:polluted_ceramic_catalist', 
            'minecraft:bucket', 
            Item.of('kubejs:rare_earth').withChance(0.3)
        ], 
        [
            'kubejs:st2_n', 
            'kubejs:ceramic_catalist', 
            Fluid.water(500), 
            'mekanism:hydrogen_chloride_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st4_n', 
            'kubejs:polluted_platinum_catalist', 
            'minecraft:bucket',
            Item.of('kubejs:especially_rare_shard').withChance(0.1)
        ], 
        [
            'kubejs:st3_n', 
            'kubejs:platinum_catalist', 
            Fluid.water(500), 
            'mekanism:hydrofluoric_acid_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st5_n', 
            'kubejs:polluted_rare_earth_catalist',
            Item.of('kubejs:especially_rare_shard').withChance(0.2),
            Item.of('kubejs:azurit_shard').withChance(0.2)
        ], 
        [
            'kubejs:st4_n', 
            'kubejs:rare_earth_catalist', 
            Fluid.water(500), 
            'kubejs:azurit_asid'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st6_n', 
            'kubejs:fulled_particle_trap', 
            'minecraft:bucket',
            Item.of('kubejs:tus_arkanium_cristall').withChance(0.2),
            Item.of('kubejs:tus_hexium_cristall').withChance(0.2),
            Item.of('kubejs:tus_karazium_cristall').withChance(0.2),
            Item.of('kubejs:tus_lukium_cristall').withChance(0.2),
            Item.of('kubejs:tus_zalium_cristall').withChance(0.2),
            'kubejs:azurit_shard'
        ], 
        [
            'kubejs:st5_n', 
            'kubejs:particle_trap', 
            Fluid.water(500), 
            'mekanismgenerators:fusion_fuel_bucket'
        ]
    )
    event.recipes.create.mixing(
        [
            'kubejs:st7_n', 
            'kubejs:fulled_processing_core',
            'kubejs:tus_karazium_cristall',
            Item.of('kubejs:tus_hexium_cristall').withChance(0.3),
            Item.of('kubejs:stable_void_dust').withChance(0.1),
        ], 
        [
            'kubejs:st6_n', 
            'kubejs:processing_core', 
            Fluid.water(500), 
            'kubejs:karasium_asid'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st8_n', 
            'kubejs:fulled_void_processing_core',
            Item.of('kubejs:fhasyc_matter').withChance(0.4)
        ], 
        [
            'kubejs:st7_n', 
            'kubejs:void_processing_core', 
            Fluid.water(500)
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st9_n', 
            'kubejs:polluted_phase_filter',
            Item.of('kubejs:infinity_core_shard').withChance(0.08)
        ], 
        [
            'kubejs:st8_n', 
            'kubejs:phase_filter', 
            Fluid.water(500)
        ]
    ).superheated()
    event.recipes.create.crushing(
        [
            '12x minecraft:netherite_scrap',

            'kubejs:matter_fiber'
        ],
         'kubejs:st9_n'
        )
}) //Рудопереработка Незерита
ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [
            'kubejs:st1_u', 
            'kubejs:polluted_clay_catalist'
        ], 
        [
            'mekanism:raw_uranium',
            'kubejs:clay_catalist', 
            Fluid.lava(500), 
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st2_u', 
            'minecraft:bucket', 
            Item.of('kubejs:dangerous_dust').withChance(0.2)
        ], 
        [
            'kubejs:st1_u', 
            'minecraft:terracotta', 
            Fluid.water(500), 
            'mekanism:sulfuric_acid_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st3_u', 
            'kubejs:polluted_ceramic_catalist', 
            'minecraft:bucket', 
            Item.of('kubejs:dangerous_dust').withChance(0.3)
        ], 
        [
            'kubejs:st2_u', 
            'kubejs:ceramic_catalist', 
            Fluid.water(500), 
            'mekanism:hydrogen_chloride_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st4_u', 
            'kubejs:polluted_platinum_catalist', 
            'minecraft:bucket',
            Item.of('kubejs:dangerous_shard').withChance(0.2)
        ], 
        [
            'kubejs:st3_u', 
            'kubejs:platinum_catalist', 
            Fluid.water(500), 
            'mekanism:hydrofluoric_acid_bucket'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st5_u', 
            'kubejs:polluted_rare_earth_catalist',
            Item.of('kubejs:dangerous_shard').withChance(0.35),
            Item.of('kubejs:azurit_shard').withChance(0.5)
        ], 
        [
            'kubejs:st4_u', 
            'kubejs:rare_earth_catalist', 
            Fluid.water(500), 
            'kubejs:azurit_asid'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st6_u', 
            'kubejs:fulled_particle_trap', 
            'minecraft:bucket',
            Item.of('kubejs:tus_arkanium_cristall').withChance(0.2),
            Item.of('kubejs:tus_hexium_cristall').withChance(0.2),
            Item.of('kubejs:tus_karazium_cristall').withChance(0.2),
            Item.of('kubejs:tus_lukium_cristall').withChance(0.2),
            Item.of('kubejs:tus_zalium_cristall').withChance(0.2),
            'kubejs:azurit_shard'
        ], 
        [
            'kubejs:st5_u', 
            'kubejs:particle_trap', 
            Fluid.water(500), 
            'mekanismgenerators:fusion_fuel_bucket'
        ]
    )
    event.recipes.create.mixing(
        [
            'kubejs:st7_u', 
            'kubejs:fulled_processing_core',
            'kubejs:tus_karazium_cristall',
            Item.of('kubejs:tus_hexium_cristall').withChance(0.4),
            Item.of('kubejs:stable_void_dust').withChance(0.1),
        ], 
        [
            'kubejs:st6_u', 
            'kubejs:processing_core', 
            Fluid.water(500), 
            'kubejs:karasium_asid'
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st8_u', 
            'kubejs:fulled_void_processing_core',
            Item.of('kubejs:fhasyc_matter').withChance(0.5)
        ], 
        [
            'kubejs:st7_u', 
            'kubejs:void_processing_core', 
            Fluid.water(500)
        ]
    ).superheated()
    event.recipes.create.mixing(
        [
            'kubejs:st9_u', 
            'kubejs:polluted_phase_filter',
            Item.of('kubejs:infinity_core_shard').withChance(0.01)
        ], 
        [
            'kubejs:st8_u', 
            'kubejs:phase_filter', 
            Fluid.water(500)
        ]
    ).superheated()
    event.recipes.create.crushing(
        [
            '12x mekanism:ingot_uranium',

            'kubejs:matter_fiber'
        ],
         'kubejs:st9_u'
        )
}) //Рудопереработка Урана
ServerEvents.recipes(event => {
     event.shaped('kubejs:clay_catalist', [
        ' T ', 
        'TFT', 
        ' T '  
      ], {
        T: 'minecraft:terracotta',
        F: 'kubejs:filter_frame',

      }
    )
    event.shaped('kubejs:ceramic_catalist', [
        ' T ', 
        'TFT', 
        ' T '  
      ], {
        T: 'kubejs:catalist_ceramic',
        F: 'kubejs:filter_frame',
      }
    )
    event.shapeless('8x kubejs:catalist_ceramic', [
        '5x minecraft:terracotta',
        '4x minecraft:white_glazed_terracotta'
    ])
    event.shaped('4x kubejs:filter_frame', [
        'IGI', 
        'G G', 
        'IGI'  
      ], {
        I: 'minecraft:iron_nugget',
        G: 'minecraft:gold_nugget',
      }
    )
    event.shaped('2x kubejs:acidpruft_filter_frame', [
        'IGI', 
        'GAG', 
        'IGI'  
      ], {
        I: 'minecraft:iron_nugget',
        G: 'minecraft:gold_nugget',
        A: 'kubejs:azurit_nugget'
      }
    )
    event.shaped('kubejs:platinum_catalist', [
        'PTP', 
        'TFT', 
        'PTP'  
      ], {
        T: 'kubejs:catalist_ceramic',
        F: 'kubejs:filter_frame',
        P: 'kubejs:platinum_nugget'
      }
    )
    event.shaped('kubejs:rare_earth_catalist', [
        'PTL', 
        'TFT', 
        'LTP'  
      ], {
        T: 'kubejs:catalist_ceramic',
        F: 'kubejs:acidpruft_filter_frame',
        P: 'kubejs:platinum_nugget',
        L: 'kubejs:palladium_nugget'
      }
    )
    event.recipes.create.compacting('kubejs:phase_filter', ['kubejs:acidpruft_filter_frame', '16x kubejs:fhasyc_matter'])
}) 
ServerEvents.recipes(event => {
    event.recipes.create.splashing([
        Item.of('kubejs:clay_catalist').withChance(0.25),
        Item.of('kubejs:tungsten_nugget').withChance(0.90),
        Item.of('kubejs:titanium_nugget').withChance(0.90),
        Item.of('kubejs:indium_nugget').withChance(0.001),
    ], 'kubejs:polluted_clay_catalist')
    event.recipes.create.splashing([
        Item.of('kubejs:ceramic_catalist').withChance(0.50),
        Item.of('16x kubejs:tungsten_nugget').withChance(0.40),
        Item.of('16x kubejs:titanium_nugget').withChance(0.40),
        Item.of('kubejs:indium_nugget').withChance(0.01),
        Item.of('kubejs:platinum_nugget').withChance(0.01),
        Item.of('kubejs:palladium_nugget').withChance(0.001),
        Item.of('kubejs:rodium_nugget').withChance(0.001)
    ], 'kubejs:polluted_ceramic_catalist')
    event.recipes.create.splashing([
        Item.of('kubejs:platinum_catalist').withChance(0.80),
        Item.of('kubejs:indium_nugget').withChance(0.1),
        Item.of('kubejs:platinum_nugget').withChance(0.1),
        Item.of('kubejs:palladium_nugget').withChance(0.01),
        Item.of('kubejs:rodium_nugget').withChance(0.01),
        Item.of('kubejs:iridium_nugget').withChance(0.001),
    ], 'kubejs:polluted_platinum_catalist')
    event.recipes.create.splashing([
        Item.of('kubejs:rare_earth_catalist').withChance(0.90),
        Item.of('kubejs:indium_nugget').withChance(0.25),
        Item.of('kubejs:platinum_nugget').withChance(0.15),
        Item.of('kubejs:palladium_nugget').withChance(0.1),
        Item.of('kubejs:rodium_nugget').withChance(0.1),
        Item.of('kubejs:iridium_nugget').withChance(0.01),
        Item.of('kubejs:neodymium_nugget').withChance(0.001),
    ], 'kubejs:polluted_rare_earth_catalist')
    event.recipes.create.splashing([
        'kubejs:particle_trap',
        Item.of('kubejs:helium_cristall').withChance(0.50),
        Item.of('kubejs:psy_cristall').withChance(0.40),
        Item.of('kubejs:stable_void_dust').withChance(0.50),
    ], 'kubejs:fulled_particle_trap')

    event.recipes.create.splashing([
        Item.of('3x kubejs:indium_nugget').withChance(0.03),
        Item.of('3x kubejs:platinum_nugget').withChance(0.01),
        Item.of('3x kubejs:palladium_nugget').withChance(0.01),
        Item.of('4x kubejs:iridium_nugget').withChance(0.01),
    ], 'kubejs:rare_earth')
    event.recipes.create.splashing([
        Item.of('3x kubejs:azurit_nugget').withChance(0.3),
        Item.of('4x kubejs:karasium_nugget').withChance(0.1),
    ], 'kubejs:dangerous_shard')
    event.recipes.create.splashing([
        Item.of('3x kubejs:azurit_nugget').withChance(0.15),
        Item.of('4x kubejs:karasium_nugget').withChance(0.03),
    ], 'kubejs:dangerous_dust')
    event.recipes.create.splashing([
        Item.of('10x kubejs:azurit_nugget').withChance(0.40),
        Item.of('kubejs:neodymium_nugget').withChance(0.001),
    ], 'kubejs:azurit_shard')
    event.recipes.create.splashing([
        Item.of('3x kubejs:indium_nugget').withChance(0.3),
        Item.of('3x kubejs:platinum_nugget').withChance(0.1),
        Item.of('3x kubejs:palladium_nugget').withChance(0.1),
        Item.of('4x kubejs:iridium_nugget').withChance(0.1),
    ], 'kubejs:especially_rare_shard')

    event.recipes.create.splashing([
        Item.of('kubejs:small_daltium_nugget').withChance(0.05),
        Item.of('kubejs:adamantit_nugget').withChance(0.05),
        Item.of('kubejs:arkanium_nugget').withChance(0.50),
    ], 'kubejs:tus_arkanium_cristall')
    event.recipes.create.splashing([
        Item.of('kubejs:small_daltium_nugget').withChance(0.05),
        Item.of('kubejs:adamantit_nugget').withChance(0.05),
        Item.of('kubejs:hexium_nugget').withChance(0.50),
    ], 'kubejs:tus_hexium_cristall')
    event.recipes.create.splashing([
        Item.of('kubejs:small_daltium_nugget').withChance(0.05),
        Item.of('kubejs:adamantit_nugget').withChance(0.05),
        Item.of('kubejs:karasium_nugget').withChance(0.50),
    ], 'kubejs:tus_karazium_cristall')
    event.recipes.create.splashing([
        Item.of('kubejs:small_daltium_nugget').withChance(0.05),
        Item.of('kubejs:adamantit_nugget').withChance(0.05),
        Item.of('kubejs:lukium_nugget').withChance(0.50),
    ], 'kubejs:tus_lukium_cristall')
    event.recipes.create.splashing([
        Item.of('kubejs:small_daltium_nugget').withChance(0.05),
        Item.of('kubejs:adamantit_nugget').withChance(0.05),
        Item.of('kubejs:zalium_nugget').withChance(0.50),
    ], 'kubejs:tus_zalium_cristall')
}) //Промывка фильтров и остатков
ServerEvents.recipes(event => {
    event.recipes.create.mixing(['kubejs:azurit_asid', 'kubejs:rare_earth_catalist'], [
        '2x kubejs:azurit_nugget',
        '4x minecraft:gunpowder',
        '2x minecraft:blaze_powder',
        'kubejs:rare_earth_catalist'
    ]).superheated()
    event.recipes.create.mixing(['kubejs:karasium_asid', 'kubejs:processing_core'], [
        '2x kubejs:karasium_nugget',
        '4x minecraft:gunpowder',
        '2x minecraft:blaze_powder',
        'kubejs:processing_core'
    ]).superheated()

    event.recipes.create.mixing('4x kubejs:rit_alloy', [
        'kubejs:rodium_ingot',
        'kubejs:iridium_ingot',
        '2x kubejs:titanium_ingot'
    ]).superheated()
    event.recipes.create.mixing('4x kubejs:titanium_alloy', [
        '4x minecraft:iron_ingot',
        '2x kubejs:titanium_ingot'
    ]).superheated()
    event.recipes.create.mixing('4x kubejs:tungsten_steel', [
        '4x #forge:ingots/steel',
        '9x kubejs:tungsten_nugget'
    ]).superheated()
    event.recipes.create.mixing('2x kubejs:nanocarbon_alloy', [
        '2x #forge:ingots/steel',
        'kubejs:titanium_alloy',
        'kubejs:tungsten_steel'
    ]).superheated()
    event.recipes.create.mixing('8x kubejs:indium_alloy', [
        '2x kubejs:indium_ingot',
        '4x kubejs:titanium_alloy',
        'kubejs:rodium_ingot',
        'minecraft:gold_ingot',
        'kubejs:rit_alloy'
    ]).superheated()
    event.recipes.create.mixing('32x kubejs:construction_alloy', [
        '2x #forge:ingots/steel',
        '2x kubejs:titanium_alloy',
        '2x kubejs:tungsten_steel',
        '2x kubejs:indium_alloy',
        '2x kubejs:nanocarbon_alloy',
        'kubejs:nanits'
    ]).superheated()
    event.recipes.create.mixing('8x kubejs:silicon_cristall', [
        '8x #minecraft:sand',
        '2x minecraft:charcoal'
    ]).superheated()
    event.recipes.create.mixing('64x kubejs:nanits', [
        '8x kubejs:hexium_nugget',
        'kubejs:small_daltium_nugget',
        '4x kubejs:arkanium_nugget',
        '2x kubejs:zalium_nugget',
        '4x kubejs:lukium_nugget'
    ]).superheated()

    event.recipes.create.pressing('kubejs:rit_plate', 'kubejs:rit_alloy')
    event.recipes.create.pressing('kubejs:construction_alloy_plate', 'kubejs:construction_alloy')
    event.recipes.create.compacting('kubejs:void_cristall', '64x kubejs:stable_void_dust').superheated()
    event.recipes.create.cutting('64x kubejs:silicon_wafer', 'kubejs:silicon_cristall')
}) //Металлы и их производные
ServerEvents.recipes(event => {
    event.shapeless('kubejs:titanium_ingot', '9x kubejs:titanium_nugget')
    event.shapeless('kubejs:rodium_ingot', '9x kubejs:rodium_nugget')
    event.shapeless('kubejs:iridium_ingot', '9x kubejs:iridium_nugget')
    event.shapeless('kubejs:hexium_ingot', '9x kubejs:hexium_nugget')
    event.shapeless('kubejs:indium_ingot', '9x kubejs:indium_nugget')
    event.shapeless('kubejs:palladium_ingot', '9x kubejs:palladium_nugget')
    event.shapeless('kubejs:platinum_ingot', '9x kubejs:platinum_nugget')
    event.shapeless('kubejs:neodymium_ingot', '9x kubejs:neodymium_nugget')
}) //Слитки из самородков
ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('kubejs:particle_trap', [
      '  CCC',
      ' C RC',
      'C F C',
      'CR C ',
      'CCC  '
    ], {
      C: 'kubejs:construction_alloy_plate',
      R: 'kubejs:rit_plate',
      F: 'kubejs:shild_generator_l1'
    })
    event.recipes.create.mechanical_crafting('kubejs:shild_generator_l1', [
        ' CCC ',
        'CASAC',
        'CSNSC',
        'CASAC',
        ' CCC '
      ], {
        C: 'kubejs:construction_alloy_plate',
        A: 'mekanism:alloy_atomic',
        S: 'mekanism:ultimate_control_circuit',
        N: 'minecraft:nether_star'
    })
    event.recipes.create.mechanical_crafting('kubejs:shild_generator_l2', [
        ' CCC ',
        'CASAC',
        'CSNSC',
        'CASAC',
        ' CCC '
      ], {
        A: 'kubejs:arkanium_nugget',
        C: 'mekanism:alloy_atomic',
        S: 'kubejs:shild_generator_l1',
        N: 'kubejs:energy_component'
    })
    event.recipes.create.mechanical_crafting('kubejs:perfect_shild_generator', [
        ' CCC ',
        'CASAC',
        'CSNSC',
        'CASAC',
        ' CCC '
      ], {
        A: 'kubejs:zalium_nugget',
        C: 'kubejs:nanocarbon_alloy',
        S: 'kubejs:shild_generator_l2',
        N: 'kubejs:void_component'
    })
    event.recipes.create.mechanical_crafting('kubejs:energy_component', [
        ' CLC ',
        'CASAC',
        'LSMSL',
        'CASAC',
        ' CLC '
      ], {
        C: 'mekanism:alloy_atomic',
        S: 'kubejs:shild_generator_l1',
        L: 'kubejs:lukium_nugget',
        A: 'kubejs:rit_plate',
        M: 'mekanism:ultimate_energy_cube'
    })
    event.recipes.create.mechanical_crafting('kubejs:processing_core', [
        ' CLC ',
        'CAMAC',
        'LMSML',
        'CAMAC',
        ' CLC '
      ], {
        C: 'mekanism:alloy_atomic',
        S: 'kubejs:shild_generator_l2',
        L: 'kubejs:lukium_nugget',
        A: 'kubejs:rit_plate',
        M: 'kubejs:shild_generator_l1'
    })
    event.recipes.create.mechanical_crafting('kubejs:void_processing_core', [
        ' CLC ',
        'CAMAC',
        'LMSML',
        'CAMAC',
        ' CLC '
      ], {
        C: 'mekanism:alloy_atomic',
        S: 'kubejs:perfect_shild_generator',
        L: 'kubejs:lukium_nugget',
        A: 'kubejs:rit_plate',
        M: 'kubejs:void_component'
    })
    event.recipes.create.mechanical_crafting('kubejs:void_component', [
        ' CLC ',
        'CAMAC',
        'LMSML',
        'CAMAC',
        ' CLC '
      ], {
        C: 'kubejs:construction_alloy_plate',
        M: 'kubejs:shild_generator_l2',
        L: 'kubejs:lukium_nugget',
        A: 'mekanism:ultimate_control_circuit',
        S: 'kubejs:void_cristall'
    })
  })