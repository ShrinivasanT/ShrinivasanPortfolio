// Renders **bold** segments the same way the reference md() helper does.
function md(s) {
  return s.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part));
}

export function UserMessage({ text }) {
  return <div className="msg-user">{text}</div>;
}

export function BotMessage({ phase, reply, shown, ctx, onFollow }) {
  return (
    <div className="msg-bot">
      <span className="brand-mark">S</span>
      <div className="bot-body">
        {phase === "thinking" ? (
          <div className="thinking"><i></i><i></i><i></i></div>
        ) : phase === "stream" ? (
          <p className="bot-text caret">{reply.text.replace(/\*\*/g, "").slice(0, shown)}</p>
        ) : (
          <>
            <p className="bot-text">{md(reply.text)}</p>
            {reply.widget ? <div className="widget">{reply.widget(ctx)}</div> : null}
            {reply.follow ? (
              <div className="followups">
                {reply.follow.map((x) => <button key={x} onClick={() => onFollow(x)}>{x}</button>)}
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
