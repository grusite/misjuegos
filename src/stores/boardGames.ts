import { defineStore } from 'pinia'

import client from '../config/api/client'
import { BoardGameStrapi, boardGameStrapiMapper } from '../config/api/mapper'

export const useBoardGamesStore = defineStore('boardGame', {
  state: () => ({
    currentBoardGame: {},
    boardGames: [],
  }),
  getters: {
    getBoardGame(state) {
      return state.currentBoardGame
    },
    getBoardGames(state) {
      return state.boardGames
    },
  },
  actions: {
    async fetchBoardGames() {
      type BoardGameStrapiApi = {
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

      const res = await client({
        url: '/board-games?populate=*',
      })

      console.log({ res })

      const boardGames = res.data.map((boardGame: BoardGameStrapi) => {
        return boardGameStrapiMapper(boardGame)
      })

      console.log({ boardGames })

      this.boardGames = boardGames
    },
  },
})
