import { useState } from 'react';

export const useGame = () => {
  useState;
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0],
    [0, 0, 3, 2, 1, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const directions = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];
  const [judge, setJudge] = useState([4, 2, 2]);
  const [pass, setPass] = useState([0, 0]);

  const onClick = (x: number, y: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    const gameJudge: number[] = JSON.parse(JSON.stringify(judge));
    if (board[y][x] === 3) {
      ++gameJudge[0];
      for (const value of directions) {
        let j = 0;
        for (let i = 1; i < 8; i++) {
          if (
            board[y + value[0] * i] !== undefined &&
            board[y + value[0] * i][x + value[1] * i] === 3 - turnColor
          ) {
            ++j;
          } else if (
            board[y + value[0] * i] !== undefined &&
            board[y + value[0] * i][x + value[1] * i] === turnColor
          ) {
            if (board[y + value[0] * i][x + value[1] * i] % 3 === 0) {
              break;
            }
            for (j - 1; j > 0; j--) {
              newBoard[y + value[0] * j][x + value[1] * j] = turnColor;
            }
          } else if (
            board[y + value[0] * i] !== undefined &&
            board[y + value[0] * i][x + value[1] * i] % 3 === 0
          ) {
            break;
          }
        }
      }
      newBoard[y][x] = turnColor;
      setTurnColor(3 - turnColor);
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          newBoard[i][j] = newBoard[i][j] % 3;
        }
      }

      let J1 = 0;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (newBoard[i][j] === 1) {
            ++J1;
          }
          for (const value of directions) {
            if (
              newBoard[i + value[0]] !== undefined &&
              newBoard[i + value[0]][j + value[1]] === turnColor &&
              newBoard[i][j] === 0
            ) {
              for (let k = 1; k < 7; k++) {
                if (
                  newBoard[i + value[0] * (k + 1)] !== undefined &&
                  newBoard[i + value[0] * k][j + value[1] * k] === turnColor &&
                  newBoard[i + value[0] * (k + 1)][j + value[1] * (k + 1)] === 3 - turnColor
                ) {
                  newBoard[i][j] = 3;
                }
              }
            }
          }
        }
      }
      gameJudge[1] = J1;
    }

    //なんで総石数でずれが生じているんだ？
    //しかも本来の数より少ないんだよな
    //なんかうまくいったわ草
    //onclick = pass;
    gameJudge[2] = gameJudge[0] - gameJudge[1];
    console.log(gameJudge[0], turnColor);
    setBoard(newBoard);
    setJudge(gameJudge);
  };
  //多分ここにbuttonの話を追加するのかな、多分。
  return { board, onClick, pass, judge, turnColor };
};
