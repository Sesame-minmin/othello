import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
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

  const onClick = (x: number, y: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
    for (const value of directions) {
      if (
        // board[y + value[0]] !== undefined &&
        // board[y + value[0]][x + value[1]] === 3 - turnColor &&
        board[y][x] === 3
      ) {
        for (let i = 1; i < 8; i++) {
          if (
            board[y + value[0] * i] !== undefined &&
            board[y + value[0] * i][x + value[1] * i] === turnColor &&
            board[y + value[0]][x + value[1]] === 3 - turnColor
          ) {
            for (let j = i - 1; j > 0; j--) {
              newBoard[y + value[0] * j][x + value[1] * j] = turnColor;
            }
            newBoard[y][x] = turnColor;
            setTurnColor(3 - turnColor);
            break;
          }
        }
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        newBoard[i][j] = newBoard[i][j] % 3;
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        for (const value of directions) {
          if (
            newBoard[i + value[0]] !== undefined &&
            newBoard[i + value[0]][j + value[1]] === turnColor &&
            newBoard[i][j] === 0
          ) {
            for (let k = 1; k < 8; k++) {
              if (
                newBoard[i + value[0] * k] !== undefined &&
                newBoard[i + value[0] * k][j + value[1] * k] === 3 - turnColor
              ) {
                newBoard[i][j] = 3;
              }
            }
          }
        }
      }
    }
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: color === 1 ? '#000' : color === 2 ? '#fff' : '#fc0' }}
                />
              )}
            </div>
          ))
        )}
      </div>
      <h1>今は{turnColor === 1 ? '黒' : '白'}の番です</h1>
    </div>
    //ボタン作れ
  );
};

export default Home;
