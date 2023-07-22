import { Cell } from '../components/components';
import { useGame } from '../hooks/useGame';
import styles from './index.module.css';

const Home = () => {
  const { board, onClick, pass, judge, turnColor } = useGame();
  return (
    //<mata name="viewport" content="width=device-width">
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <Cell key={`${x}-${y}`} color={color} onClick={() => onClick(x, y)} />
          ))
        )}
      </div>
      <div className={styles.game}>
        {pass.includes(2) || judge[1] + judge[2] === 64 ? (
          <h1>勝者は{judge[1] > judge[2] ? '黒' : '白'}です</h1>
        ) : (
          <h1>今は{turnColor === 1 ? '黒' : '白'}の番です</h1>
        )}
        <h2>黒：{judge[1]}枚</h2> <h2>白：{judge[2]}枚</h2>
      </div>
      <div className={styles.passbotton}>
        <h1>パス</h1>
      </div>
    </div>
    //</mata>
    //ボタン作れ
  );
};

export default Home;
