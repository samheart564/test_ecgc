/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import type { BuffStatKey, Hull, Nation } from './common'
import { type SkillType } from './skills'

export interface MapData {
    name: string
    acv: number
    boss: BossData
    opsi: boolean
    buffs: BossBuff[]
    buffs_display?: DisplayOnlyBuff[][]
    type: MapType
    id: number
    expo_id: number | number[] | null
    dungeon_id: number | number[] | null
    time_limit: number
}

interface BossBuff {
    key: BuffStatKey
    amount: number
    self: boolean
}

interface DisplayOnlyBuff {
    name: string
    description: string
    // 0 indexed
    month?: number
    icon?: string
    color?: SkillType
}

type MapType =
1 | // Normal
2 | // Hard
3 | // Event Normal
4 | // Event Hard
5 | // Event SP
6 | // Event EX
7 | // Event Special Stage
8 | // Event TP
9 | // META
10 | // Guild
11 | // OpSi
12 | // Extreme Challenge Easy
13 | // Extreme Challenge Medium
14 | // Extreme Challenge Hard
15 | // Event Normal (WA)
16 | // Event Hard (WA)
17 | // raid map
18 // coalation map

type EnemyStatKey = 'hp' | 'fp' | 'trp' | 'avi' | 'aa' | 'hit' | 'eva' | 'spd' | 'luck' | 'armor'

interface BossData {
    id: number
    name: string
    hull: Hull
    nation: Nation
    stats: Record<EnemyStatKey, number>
    level: number
    offense_boost: number
    survival_boost: number
    tactics_boost: number
    icon: string
    // width, height, length
    cld: number[]
}
