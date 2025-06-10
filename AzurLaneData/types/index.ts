/*
 * Copyright (C) 2022-2025 Lars K. (MrLar)
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import augmentCosts from '../data/augment_cost.json'
import augmentList from '../data/augments.json'
import barrages from '../data/barrages.json'
import cruiseList from '../data/cruise_passes.json'
import defaultEquipList from '../data/default_equips.json'
import dorm3DCharacterList from '../data/dorm3d_characters.json'
import dorm3DCollectableList from '../data/dorm3d_collectible.json'
import dorm3DFurnitureList from '../data/dorm3d_furniture.json'
import dorm3DGiftList from '../data/dorm3d_gifts.json'
import dorm3DRoomList from '../data/dorm3d_rooms.json'
import equipDropList from '../data/equip_drops.json'
import equipUpgradeCosts from '../data/equip_upgrade_cost.json'
import equipmentList from '../data/equipments.json'
import gearLabRecipes from '../data/gear_lab.json'
import gearSkilList from '../data/gear_skins.json'
import itemData from '../data/items.json'
import groupChats from '../data/juu_chats.json'
import shipProfiles from '../data/juu_profiles.json'
import mapList from '../data/maps.json'
import abilityList from '../data/meowfficer_abilities.json'
import meowList from '../data/meowfficers.json'
import researchProjects from '../data/research_projects.json'
import shipDropList from '../data/ship_drops.json'
import shipRetroCosts from '../data/ship_retro_cost.json'
import shipsList from '../data/ships.json'
import skinVoiceLines from '../data/ships_words.json'
import shopList from '../data/shops.json'
import skillList from '../data/skills.json'
import skinList from '../data/skins.json'
import specialSecretaryList from '../data/special_secretaries.json'
import specialWeaponsList from '../data/special_weapons.json'
import fleetTechGroupData from '../data/tech_groups.json'
import type { AugmentCost, AugmentData } from './augments'
import { type Barrage } from './barrages'
import { type CruisePass } from './cruise_pass'
import {
    type Dorm3DCharacter, type Dorm3DCollectable,
    type Dorm3DFurniture, type Dorm3DGift, type Dorm3DRoom
} from './dorm3d'
import type { EquipDropData, EquipmentData, GearLabRecipe, UpgradeCost, Weapon } from './equipments'
import { type GearSkin } from './gear_skins'
import { type Item } from './items'
import { type FleetChat, type JuuProfile } from './juustagram'
import type { MapData } from './maps'
import type { MeowfficerAbility } from './meowfficer_abilities'
import type { MeowfficerData } from './meowfficers'
import { type Research } from './research_projects'
import type { RetroCost, ShipData, ShipDropData, SkinWords } from './ships'
import { type Shop } from './shops'
import type { SkillData } from './skills'
import type { SkinInfo } from './skins'
import { type SpecialSecretary } from './special_secretaries'
import { type TechGroup } from './tech_groups'

export const augments = augmentList as Record<number, AugmentData | undefined>
export const specialWeapons = specialWeaponsList as Record<number, Weapon | undefined>
export const ships = shipsList as Record<number, ShipData | undefined>
export const equipments = equipmentList as Record<number, EquipmentData | undefined>
export const meowabilities = abilityList as Record<number, MeowfficerAbility | undefined>
export const meowfficers = meowList as Record<number, MeowfficerData | undefined>
export const skills = skillList as Record<number, SkillData | undefined>
export const skins = skinList as Record<number, SkinInfo | undefined>
export const maps = mapList as Record<string, MapData | undefined>
export const defaultEquip = defaultEquipList as Record<number, EquipmentData | undefined>
export const shipDrops = shipDropList as Record<number, ShipDropData | undefined>
export const equipDrops = equipDropList as Record<number, EquipDropData | undefined>
export const retroCosts = shipRetroCosts as Record<number, Record<string, RetroCost | undefined> | undefined>
export const equipCosts = equipUpgradeCosts as Record<number, UpgradeCost[] | undefined>
export const augCost = augmentCosts as Record<number, AugmentCost | undefined>
export const items = itemData as Record<number, Item | undefined>
export const labRecipes = gearLabRecipes as Record<number, GearLabRecipe | undefined>
export const gearSkins = gearSkilList as Record<number, GearSkin | undefined>
export const shops = shopList as Record<number, Shop | undefined>
export const researches = researchProjects as Record<number, Research | undefined>
export const voiceLines = skinVoiceLines as Record<number, SkinWords | undefined>
export const techGroups = fleetTechGroupData as Record<number, TechGroup | undefined>
export const dorm3DRooms = dorm3DRoomList as Record<number, Dorm3DRoom | undefined>
export const dorm3DCharacters = dorm3DCharacterList as Record<number, Dorm3DCharacter | undefined>
export const dorm3DCollectable = dorm3DCollectableList as Record<number, Dorm3DCollectable | undefined>
export const dorm3DFurniture = dorm3DFurnitureList as Record<number, Dorm3DFurniture | undefined>
export const dorm3DGifts = dorm3DGiftList as Record<number, Dorm3DGift | undefined>
export const cruisePasses = cruiseList as Record<number, CruisePass | undefined>
export const fleetChats = groupChats as Record<number, FleetChat | undefined>
export const juuProfiles = shipProfiles as Record<number, JuuProfile | undefined>
export const specialSecretaries = specialSecretaryList as Record<number, SpecialSecretary | undefined>
export const barrageData = barrages as Record<number, Barrage[] | undefined>

export const SHIP_FLAGS = {
  BULIN: 1 << 0, // 1
  RETRO: 1 << 1, // 2
  RESEARCH: 1 << 2, // 4
  FATE: 1 << 3, // 8
  META: 1 << 4, // 16
} as const

