export default function Cover({ cover, size = 'md' }) {
  const contain = cover.fit === 'contain'
  return (
    <div
      className={`cover cover--${size} ${contain ? 'cover--contain' : ''}`}
      style={{ '--c1': cover.from, '--c2': cover.to }}
      aria-hidden="true"
    >
      {cover.image ? (
        <img src={cover.image} alt="" className="cover__img" />
      ) : (
        <>
          <span className="cover__pattern" />
          <span className="cover__ring" />
          {cover.word && <span className="cover__word">{cover.word}</span>}
          <span className="cover__emoji">{cover.emoji}</span>
        </>
      )}
    </div>
  )
}
