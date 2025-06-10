---
title: Equipment Documentation
---

# Equipment Data

Equipment Data refers to any and all equipments (that are not augments). It
extends [`BaseEquipData`](../index.md#base-equipment-data) with `T` being
an [`EquipmentType`](../../common.md#equipment-type).

It additionally provides the following properties:

|       Property        |                           Type                           |                                                                                                                                                                           Description                                                                                                                                                                           |
| :-------------------: | :------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       **tech**        |                         `number`                         |                                                                                                                                                    The in game tech value of this equipment. Mostly useless.                                                                                                                                                    |
| **hull_restrictions** |             [`Hull[]`](../../common.md#hull)             |                                                                                                                     Hulls they **cannot** equip this gear regardless of what their [`slot types`](../../ships/index.md#ship-slot-data) say.                                                                                                                     |
|     **armaments**     |           [`Armament[]`](#armament) \| `null`            |                                                                                                                                                 Plane armaments if this equipment is a plane, otherwise `null`.                                                                                                                                                 |
|      **weapon**       | [`Weapon`](#weapon) \| [`Aircraft`](#aircraft) \| `null` |                                                                                                        Weapon, if weapon, or Aircraft, if plane, data of this equipment or `null` if neither.<br>This is always and Aircraft if `armaments` is non-null.                                                                                                        |
|  **equippable_main**  |             [`Hull[]`](../../common.md#hull)             |    Hulls that can usually equip this equipment in their main weapon slot. If this and `equippable_sub` are the same it refers to any slot instead. **This is used for a visual representation only and should not be used to check if a ship can equip the gear (use [`slot types`](../../ships/index.md#ship-slot-data) and `hull_restrictions` instead)**.    |
|  **equippable_sub**   |             [`Hull[]`](../../common.md#hull)             | Hulls that can usually equip this equipment in their secondary weapon slot. If this and `equippable_main` are the same it refers to any slot instead. **This is used for a visual representation only and should not be used to check if a ship can equip the gear (use [`slot types`](../../ships/index.md#ship-slot-data) and `hull_restrictions` instead)**. |
|   **skill_levels**    |                       `number[][]`                       |                                                                                      **(Optional)** Level for each skill this equip has at a given enhance level, if absent all skills are always level 1. Keep in mind that skill values are 0 indexed and these are not!                                                                                      |

# Weapon

Weapon extends both [`ExtendedWeapon`](../index.md#extended-weapon)
and [`ReloadableWeapon`](../index.md#reloadable-weapon) and additionally provides the following:

|    Property     |                         Type                          |                                                             Description                                                              |
| :-------------: | :---------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
|    **delay**    |                       `number`                        | Total delay of the entire firing logic. Commonly referred to as `VolleyTime`. This effectively extends the guns **final** cooldown.. |
| **coefficient** |                      `number[]`                       |                            Weapon coefficient at each enhancement level (i.E. index 0 is +0, and so on).                             |
|  **tracker?**   | [`MagneticTracker`](../../common.md#magnetic-tracker) |  **(Optional)** Tracker the ammo carried has in it, this is only potentially present if the ammo is a torpedo (4) or a missile (8).  |

# Aircraft

Aircraft extends [`ReloadableWeapon`](../index.md#reloadable-weapon) and additionally provides the
following:

|       Property        |    Type    |                                                                                                      Description                                                                                                      |
| :-------------------: | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  **is_interceptor**   | `boolean`  |                                                                                     Whether this plane is an interceptor or not.                                                                                      |
| **intercept_reload?** | `number[]` |                                                        **(Optional)** Only present if `is_interceptor` is `true`. Replaces `reload` for interception launches.                                                        |
| **intercept_count?**  | `number[]` |                                                        **(Optional)** Only present if `is_interceptor` is `true`. Replaces `count` for interception launches.                                                         |
|       **speed**       |  `number`  |                                                                                         The speed of the plane in game units.                                                                                         |
|    **int_speed?**     |  `number`  |                                 **(Optional)** The speed of the intercept-plane in game units, if absent the plane is either not an interceptor or the speed is the same as `speed`.                                  |
|        **hp**         | `number[]` |                                                                    The base HP of the plane at each enhance level (i.E. index 0 is +0, and so on).                                                                    |
|      **int_hp?**      | `number[]` |           **(Optional)** The base HP of the intercept-plane at each enhance level (i.E. index 0 is +0, and so on), if absent the plane is either not an interceptor or the hp values are the same as `hp`.            |
|     **hp_growth**     | `number[]` |         The growth rate of HP of the plane at each enhance level (i.E. index 0 is +0, and so on).<br>Final HP is calculated as: $$ hp_{level} + \frac{hp\_growth_{level}}{1000 \times (ship\_level - 1)} $$.          |
|  **int_hp_growth?**   | `number[]` | **(Optional)** The growth rate of HP of the intercept-plane at each enhance level (i.E. index 0 is +0, and so on), if absent the plane is either not an interceptor or the growth values are the same as `hp_growth`. |
|       **dodge**       |  `number`  |                                                                                            RNG constant for plane dodges.                                                                                             |
|    **int_dodge?**     |  `number`  |                                     **(Optional)** RNG constant for intercept-plane dodges, if absent the plane is either not an interceptor or the dodge is the same as `dodge`.                                     |
|    **dodge_limit**    |  `number`  |                                                                                             Constant for maximum dodges.                                                                                              |
| **int_dodge_limit?**  |  `number`  |                           **(Optional)** Constant for maximum dodges of the intercept-plane, if absent the plane is either not an interceptor or the constant is the same as `dodge_limit`.                           |
|     **crash_dmg**     |  `number`  |                                                                              End of Screen damage of this plane (enemies and PvP only).                                                                               |
|        **id**         |  `number`  |                                                                                                The ID of the aircraft.                                                                                                |
|   **intercept_id?**   |  `number`  |                                                              **(Optional)** The ID of the aircraft used for intercepting if `is_interceptor` is `true`.                                                               |

# Armament

Armament extends both [`ExtendedWeapon`](../index.md#extended-weapon)
and [`ReloadableWeapon`](../index.md#reloadable-weapon) and additionally provides:

|     Property     |    Type    |                                                    Description                                                     |
| :--------------: | :--------: | :----------------------------------------------------------------------------------------------------------------: |
|     **name**     |  `string`  |                                              Names of this armament.                                               |
| **coefficient?** | `number[]` | **(Optional)** Weapon coefficient at each enhancement level (i.E. index 0 is +0, and so on), if absent treat as 1. |
|   **airdrop?**   | `boolean`  |                       **(Optional)** Whether this armament behaves like an airdropped bomb.                        |
|  **skip_bomb?**  | `boolean`  |                           **(Optional)** Whether this armament behaves like a skip bomb.                           |


# Drop Data

Equip Drop Data contains relevant information on how an equipment can be obtained. It provides the
following propeties:

|   Property    |    Type    |                                                               Description                                                                |
| :-----------: | :--------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
|    **id**     |  `number`  |                                                    The equipment ID this data is for.                                                    |
| **locations** | `string[]` |                                          Textual explanation of where to obtain the equipment.                                           |
| **lab_from**  | `number[]` | List of [gear lab IDs](https://github.com/MrLar/AzurLaneData/tree/main/data/#gear_lab.json) this gear can be crafted out of in gear lab. |
|  **lab_to**   | `number[]` |  List of [gear lab IDs](https://github.com/MrLar/AzurLaneData/tree/main/data/#gear_lab.json) this gear can be crafted into in gear lab.  |