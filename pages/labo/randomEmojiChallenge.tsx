import Head from 'next/head'
import { useEffect, useState, useMemo } from 'react';
import Layout from '../../components/layout'

export default function randomEmojiChallenge() {
  const emojis = ['🌹','🐶','🐱'];
  const [bestScore, setBestScore] = useState(0)
  const [challengeTotalNum, setChallengeTotalNum] = useState(0)
  const [emojiStack, setEmojiStack] = useState<string[][]>([]);
  const [gameClear, setGameClear] = useState(false)
  const [challengeResults, setChallengeResults] = useState<boolean[]>([])

  const buttonText = useMemo(() => {
    return gameClear === false ? `${challengeTotalNum+1}回目チャレンジ` : '一致おめでとう！！';
  }, [gameClear, challengeTotalNum]);

  const resultText = (result: boolean) => result === false ? 'X' : '◯'

  const reversedEmojiStack = [...emojiStack].reverse()

  const isAllSameEmoji = (array: string[]): boolean => {
    return array.every(value => value === array[0])
  }
  const pickRandomEmoji = ():string[] => {
    let array:string[] = [];
    for (let i = 0; i < 5; i++) {
        array.push(emojis[Math.floor(Math.random()*emojis.length)]);
    }
    return array;
  }

  const addEmoji = ():void => {
    setEmojiStack((prev) => {
        const newArray = [...prev];
        newArray.push(pickRandomEmoji());
        return newArray;
    });
  };

  const reset = ():void => {
    setChallengeTotalNum(0);
    setGameClear(false);
    setEmojiStack([]);
    setChallengeResults([])
  }

  useEffect(
    () => {
        if(emojiStack[challengeTotalNum]) {
            const result = isAllSameEmoji(emojiStack[challengeTotalNum]);
            setChallengeResults((prev) => {
              const newArray = [...prev];
              newArray.push(result);
              return newArray;
            });
            setChallengeTotalNum((prev)=> prev + 1)
            if(result === true){
              if(bestScore === 0 || bestScore >= challengeTotalNum) {
                setBestScore(challengeTotalNum+1);
              }
              setGameClear(true)
            }
        }
    },
    [emojiStack]
  );

  return (
    <Layout>
      <Head>
        <title>絵文字一致チャレンジ！</title>
      </Head>

      <div className="container text-center">
        <h1 className="text-xl font-bold mb-2">絵文字一致チャレンジ！</h1>

        { bestScore != 0 &&
          <div>ベストスコア：{bestScore}回目で成功</div>
        }
        <button onClick={addEmoji} disabled={gameClear} className="rounded-full bg-sky-500 px-5 py-3 mb-3 text-white touch-manipulation" type="button">
          {buttonText}
        </button>
        <br />
        { gameClear &&
          <button onClick={reset} className="rounded-full bg-red-300 px-5 py-3 mb-3 text-white touch-manipulation" type="button">
            リセット
          </button>
        }
        <div>
            { reversedEmojiStack.map((emoji, index)=>
                <div key={index}>
                    <span>{reversedEmojiStack.length - index}回目</span>
                    <span className='text-xl'>{emoji}</span>
                    <span>・・・{resultText(challengeResults[reversedEmojiStack.length - 1 - index])}</span>
                </div>
            )}
        </div>
      </div>
    </Layout>
  )
}
