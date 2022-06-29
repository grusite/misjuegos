interface PlayersStrapi {
  id: number
  attributes: {
    Name: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
  }
}

export interface BoardGameStrapi {
  id: number
  attributes: {
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
}

export function boardGameStrapiMapper(boardGameStrapi: BoardGameStrapi) {
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
        name: player.attributes.Name,
      }
    }),
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

export function userStrapiMapper(userStrapi: UserStrapi) {
  return {
    id: userStrapi.id,
    email: userStrapi.email,
    provider: userStrapi.provider,
    username: userStrapi.username,
    role: userStrapi?.role?.type,
    blocked: userStrapi.blocked,
  }
}
