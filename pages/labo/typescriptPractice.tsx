import Head from "next/head";
import { User } from "../../models/User";
import UserCard from "../../components/UserCard";
import { useEffect, useState, useMemo } from "react";
import Layout from "../../components/layout";

export default function randomEmojiChallenge() {
  const [emojiArray, setEmojiArray] = useState<string[]>(['🌹','🐶','🐱'])
  const [selectedEmoji, setSelectedEmoji] = useState<string>('🌹')
  const [name, setName] = useState<string>('佐藤')
  const [old, setOld] = useState<number>(10)
  const [users, setUsers] = useState<User[]>([])
  const [userTotal, setUserTotal] = useState<number>(0);

  const handleRadioChange = (e) => {
    setSelectedEmoji(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleOldChange = (e) => {
    setOld(parseInt(e.target.value, 10))
  }

  function addEmoji() :void {
    setEmojiArray((pre)=>{
        return [...pre, '😍']
    });
  }

  function addUser(): void {
    setUserTotal((pre)=>{
        return pre + 1
    });
    setUsers((pre)=>{
        return [...pre, new User(userTotal, selectedEmoji, name, old)]
    })
  }
  return (
    <Layout>
      <Head>
        <title>typescriptの勉強！</title>
      </Head>

      <h1 className="text-xl font-bold mb-2">Typescriptについて勉強しよう！</h1>

      <button className="rounded-full bg-sky-500 px-5 py-3 mb-3 text-white touch-manipulation" type="button" onClick={addEmoji}>絵文字追加</button>

      { emojiArray.map((emoji, index)=>(
        <span key={index}>{emoji}</span>
      ))}

      <fieldset>
        <legend className="text-xl mb-2">Userモデルを追加しよう</legend>
        <fieldset>
            <legend>絵文字</legend>
            { emojiArray.map((emoji, index)=>(
                <span key={`emoji-${index}`} className="m-1 text-2xl">
                    <input id={`emoji-${index}`} type="radio" name="emoji" value={emoji} onChange={handleRadioChange} checked={emoji === selectedEmoji} />
                    <label htmlFor={`emoji-${index}`} className="peer-checked/draft:text-sky-500">{emoji}</label>
                </span>
            ))}
        </fieldset>
        <label className="block mb-2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">名前</span>
            <input type="text" onChange={handleNameChange} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:ring-1" placeholder="佐藤" value={name} />
        </label>
        <label className="block mb-2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">年齢</span>
            <input type="number" value={old} onChange={handleOldChange} className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:ring-1" />
        </label>
      </fieldset>
      <button
        className="rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 px-3 py-1 mb-3 text-white touch-manipulation"
        type="button"
        onClick={addUser}
      >
        User追加
      </button>
      <div className="grid grid-cols-auto-fit gap-4">
        { users.map((user) => (
            <div key={user.id}>
                <UserCard user={user} />
            </div>
        ))}
      </div>
    </Layout>
  );
}
