import React, { useEffect, useState } from 'react'
import CSS from 'csstype';


/**
 * 
 * Candyland game
 * players move a cross a board by roling dice which tells them to advance to next color
 * players need to land on last space of the board
 * 
 * 
 */

interface props {
    board: number[],
    playerPositions: number[]
    diceToColorMap: { [key: number]: string; }
}

export const Board = ({ board, playerPositions, diceToColorMap }: props) => {
    const divStyle: CSS.Properties = {
        width: '45%',
        float: "left"
    }

    const getCellStyle = (color: number, idx: number) => {
        const style: CSS.Properties = {
            backgroundColor: diceToColorMap[color],
            height: '20px',
            marginBottom: "2px"
        }
        let innerHtml = ""

        for (let i = 0; i < playerPositions.length; i++) {
            if (playerPositions[i] === idx) {
                innerHtml += " player" + i
            }
        }

        return (
            <div style={style}>{innerHtml}</div>
        )
    }

    return (
        <div style={divStyle}>
            {
                board.map((color: number, idx: number) => {
                    return (
                        getCellStyle(color, idx)
                    )
                })
            }
        </div>
    )
}


interface viewProps {
    playersTurn: number,
    diceToColorMap: { [key: number]: string; },
    doPlayersTurn: () => void
}

export const GameInterface = ({ playersTurn, diceToColorMap, doPlayersTurn }: viewProps) => {
    const viewStyle: CSS.Properties = {
        width: "45%",
        color: "purple",
        float: "right"
    }

    return (
        <div style={viewStyle}>
            <h1> {"Player Turn: " + playersTurn} </h1>
            <button onClick={doPlayersTurn}>roll dice</button>
        </div>
    )
}


export const Sandbox = () => {

    let [playerPositions, setPlayerPositions]: any[] = useState([0, 0])
    let [playersTurn, setPlayersTurn] = useState<number>(0)

    const sandboxStyle = {
        display: 'inline'
    }

    // board
    let board: number[] = [1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 1, 3, 1, 1, 3, 3, 2]

    //dice map
    let diceToColorMap: { [key: number]: string; } = { 1: "red", 2: "green", 3: "blue" }

    //next players turn
    const nextPlayersTurn = () => {
        const newTurn = (playersTurn + 1) % 2
        return newTurn
    }

    // move to new position
    const moveToNewPosition = (playersTurn: number, board: number[], rolled: number) => {
        const currentPosition = playerPositions[playersTurn]
        let nextPosition = currentPosition
        let foundNewPosition = false

        while (!foundNewPosition && nextPosition < board.length) {
            nextPosition++
            if (board[nextPosition] == rolled) {
                foundNewPosition = true
            }
        }

        return (foundNewPosition) ? nextPosition : currentPosition
    }

    //do players turn function
    const doPlayersTurn = () => {
        // prompt player to roll dice

        //roll dice
        const rolled = rollDice()
        const temp = playersTurn
        window.alert("Player " + temp + " rolled a " + diceToColorMap[rolled])

        // move to new position
        const newPosition = moveToNewPosition(playersTurn, board, rolled)

        playerPositions[playersTurn] = newPosition

        // check if player is winner
        if (newPosition == board.length - 1) {
            window.alert("Player " + playersTurn + " wins candyland!!!!")
            setPlayerPositions([0, 0])
            return
        }

        // advance turn
        const nextPlayer: number = nextPlayersTurn()


        window.alert("Next is Player " + nextPlayer)
        setPlayersTurn(nextPlayer)

    }

    // roll dice function
    const rollDice = () => {
        const rolled = Math.ceil(Math.random() * 3)
        return rolled
    }

    return (
        <div>
            <h1>Candyland game</h1>

            <div style={sandboxStyle}>
                <Board
                    board={board}
                    playerPositions={playerPositions}
                    diceToColorMap={diceToColorMap}
                />
                <GameInterface
                    playersTurn={playersTurn}
                    diceToColorMap={diceToColorMap}
                    doPlayersTurn={doPlayersTurn}
                />
            </div>


        </div>
    )
}

export default Sandbox