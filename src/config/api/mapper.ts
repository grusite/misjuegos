interface PlayersStrapi {
  id: number
  attributes: {
    name: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
  }
}

export interface BoardGame {
  gameName: string
  startDate: Date
  duration: number
  expansion: string
  mission: string
  characters: string | null
  extraPlayer: string
  success: boolean
  notes: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  players: {
    data: PlayersStrapi[]
  }
}

export interface BoardGameStrapi {
  id: number
  attributes: BoardGame
}

export interface BoardGameMapped {
  gameName: string
  startDate: Date
  duration: number
  expansion: string
  mission: string
  characters: string | null
  extraPlayer: string
  success: boolean
  notes: string
  players: {
    name: string
  }[]
}

export function boardGameStrapiMapper(boardGameStrapi: BoardGameStrapi): BoardGameMapped {
  return {
    gameName: boardGameStrapi.attributes.gameName,
    startDate: boardGameStrapi.attributes.startDate,
    duration: boardGameStrapi.attributes.duration,
    expansion: boardGameStrapi.attributes.expansion,
    mission: boardGameStrapi.attributes.mission,
    characters: boardGameStrapi.attributes.characters,
    extraPlayer: boardGameStrapi.attributes.extraPlayer,
    success: boardGameStrapi.attributes.success,
    notes: boardGameStrapi.attributes.notes,
    players: boardGameStrapi.attributes.players.data.map((player) => {
      return {
        name: player.attributes.name,
      }
    }),
  }
}

export interface Cover {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText: string
      caption: string
      width: number
      height: number
      formats: {
        thumbnail: {
          ext: string
          url: string
          hash: string
          mime: string
          name: string
          path: string
          size: number
          width: number
          height: number
        }
      }
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl: string
      provider: string
      provider_metadata: string
      createdAt: Date
      updatedAt: Date
    }
  }
}

export interface GameStrapi {
  id: number
  attributes: {
    name: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    cover: Cover
  }
}

export interface GameMapped {
  name: string
  coverImg: string
}

export function gameStrapiMapper(gameStrapi: GameStrapi): GameMapped {
  return {
    name: gameStrapi.attributes.name,
    coverImg: gameStrapi.attributes.cover.data.attributes.formats.thumbnail.url,
  }
}

type UserStrapiRole = {
  id: number
  name: string
  description: string
  type: string
  createdAt: Date
  updatedAt: Date
}

interface UserStrapi {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: Date
  updatedAt: Date
  role?: UserStrapiRole
}

export interface UserMapped {
  id: number
  username: string
  email: string
  provider: string
  blocked: boolean
  role?: string
}

export function userStrapiMapper(userStrapi: UserStrapi): UserMapped {
  return {
    id: userStrapi.id,
    username: userStrapi.username,
    email: userStrapi.email,
    provider: userStrapi.provider,
    blocked: userStrapi.blocked,
    role: userStrapi?.role?.type,
  }
}
