import { defineStore } from 'pinia'

import client from '../config/api/client'
import {
  BoardGameMapped,
  BoardGameStrapi,
  boardGameStrapiMapper,
  GameMapped,
  GameStrapi,
  gameStrapiMapper,
} from '../config/api/mapper'

const savedBoardGame = localStorage.getItem('boardGame')
const savedBoardGames = localStorage.getItem('boardGames')
const savedGames = localStorage.getItem('games')

export const useBoardGamesStore = defineStore('boardGame', {
  state: () => ({
    currentBoardGame: (savedBoardGame ? JSON.parse(savedBoardGame) : {}) as BoardGameMapped,
    boardGames: (savedBoardGames ? JSON.parse(savedBoardGames) : []) as BoardGameMapped[],
    games: (savedGames ? JSON.parse(savedGames) : []) as GameMapped[],
  }),
  getters: {
    getBoardGame(state) {
      return state.currentBoardGame
    },
    getBoardGames(state) {
      return state.boardGames
    },
    getGameByName(state) {
      return (name: string) => state.games.find((game) => game.name === name)
    },
  },
  actions: {
    async fetchBoardGames() {
      type BoardGameStrapiApi = {
        data: {
          data: BoardGameStrapi[]
          meta: {
            pagination: {
              page: number
              pageSize: number
              pageCount: number
              total: number
            }
          }
        }
      }

      const res = await client({
        url: '/board-games?populate=*',
      })

      const boardGames = (res as BoardGameStrapiApi).data.data.map((boardGame) => {
        return boardGameStrapiMapper(boardGame)
      })

      localStorage.setItem('boardGames', JSON.stringify(boardGames))
      this.boardGames = boardGames
    },

    async fetchCovers() {
      type GameStrapiApi = {
        data: {
          data: GameStrapi[]
          meta: {
            pagination: {
              page: number
              pageSize: number
              pageCount: number
              total: number
            }
          }
        }
      }
      const res = await client({
        url: '/games?populate=*',
      })

      const games = (res as GameStrapiApi).data.data.map((game) => {
        return gameStrapiMapper(game)
      })

      localStorage.setItem('games', JSON.stringify(games))
      this.games = games
    },
  },
})
