"use client";
import { useState } from "react";

export default function GhostGangUnified() {
  const [view, setView] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const startExperience = () => {
    setView(1);
    setIsPlaying(true);
  };

  const allMembers = [
    { id: 1, name: "Hunter castellano", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/hunter.castellano.2025?locale=th_TH" },
    { id: 2, name: "Nampunch Rubmaidai", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/nong.grace.954672?locale=th_TH" },
    { id: 3, name: "Bank Whatisluv", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/elle.whatisluv?locale=th_TH" },
    { id: 4, name: "Semi Gardos", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61587489156557&locale=th_TH" },
    { id: 5, name: "Razer Pentagram", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61578682112163&locale=th_TH" },
    { id: 6, name: "Cartier Layla", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=100025885462092&locale=th_TH" },
    { id: 7, name: "MeePhu Satxnic", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/meephu.satxnic?locale=th_TH" },
    { id: 8, name: "Saka Readyplus", role: "MEMBER", group: "GHOST GANG", color: "border-gray-900/30", fb: "https://web.facebook.com/saka.readyplus?locale=th_TH" },
    { id: 9, name: "Mindbabe Ygz", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/babebee.bebe?locale=th_TH" },
    { id: 10, name: "Thingthing Hologram", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61579514684476&locale=th_TH" },
    { id: 11, name: "EMPTY SLOT", role: "VACANT", group: "GHOST GANG", color: "border-gray-900/30", fb: null },
    { id: 12, name: "Jxck Dernyoungsay", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61584726548593&locale=th_TH" },
    { id: 13, name: "Leo Payamarn", role: "MEMBER", group: "GHOST GANG", color: "border-gray-900/30", fb: "https://web.facebook.com/profile.php?id=61579549214581&locale=th_TH" },
    { id: 14, name: "Billy Diabalito", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61584032180777&locale=th_TH" },
    { id: 15, name: "Coco Ghost", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "#" },
    { id: 16, name: "Ton Aor", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/tonaor.orapirn?locale=th_TH" },
    { id: 17, name: "EMPTY SLOT", role: "VACANT", group: "GHOST GANG", color: "border-gray-900/30", fb: null },
    { id: 18, name: "Rodin Daragods", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "#" },
  ];

  const filtered = allMembers.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <title>GHOSTGANG</title>

      {/* FIXED: เพิ่มระบบหน่วงเวลาเพื่อให้คำสั่ง setVolume ทำงานได้จริง */}
      {isPlaying && (
        <div style={{ position: "fixed", top: "-1000px", left: "-1000px", opacity: 0, pointerEvents: "none" }}>
          <iframe
            width="1"
            height="1"
            src="https://www.youtube.com/embed/WDuBvEoL_m4?autoplay=1&loop=1&playlist=WDuBvEoL_m4&enablejsapi=1"
            allow="autoplay"
            onLoad={(e) => {
              const frame = e.target as HTMLIFrameElement;
              // หน่วงเวลา 2 วินาทีเพื่อให้ Player พร้อมรับคำสั่ง (แก้ปัญหาเสียงไม่ลด)
              setTimeout(() => {
                frame.contentWindow?.postMessage(JSON.stringify({
                  event: "command",
                  func: "setVolume",
                  args: [10] // ปรับเหลือ 15% (เบาลงกว่าเดิม)
                }), "*");
              }, 500);
            }}
          ></iframe>
        </div>
      )}

      <main className="min-h-screen bg-[#050505] text-white font-sans uppercase overflow-x-hidden transition-all duration-700">
        {/* ----------------- VIEW 0: LANDING ----------------- */}
        {view === 0 && (
          <div className="flex flex-col items-center justify-center min-h-screen text-center animate-in fade-in zoom-in duration-1000 px-6">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 italic">
              GHOST <span className="text-gray-800">GANG</span>
            </h1>
            <p className="text-[10px] tracking-[1em] text-gray-600 mb-12">
              13GHOSTGANG IN BYOU
            </p>
            <button
              onClick={startExperience}
              className="group relative px-20 py-5 bg-transparent border border-gray-800 rounded-full overflow-hidden transition-all hover:border-white active:scale-95"
            >
              <span className="relative z-10 font-bold tracking-[0.4em] text-xs">
                Members List
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center font-bold tracking-[0.4em] text-xs text-black opacity-0 group-hover:opacity-100 transition-opacity">
                Access Directory
              </span>
            </button>
          </div>
        )}

        {/* ----------------- VIEW 1: MEMBERS DIRECTORY ----------------- */}
        {view === 1 && (
          <div className="w-full max-w-7xl mx-auto p-6 md:p-12 animate-in slide-in-from-bottom-12 fade-in duration-700">
            <div className="flex flex-col items-center mb-16 pt-10">
              <button
                onClick={() => setView(0)}
                className="mb-8 text-[9px] tracking-[0.5em] text-gray-700 hover:text-white transition-colors uppercase border border-gray-900 px-6 py-2 rounded-full hover:border-gray-500"
              >
                ← Return Home
              </button>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-10 text-center uppercase">
                GHOST GANG <span className="text-gray-800">MEMBERS</span>
              </h2>

              <div className="relative w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-gray-900 rounded-2xl px-8 py-5 text-sm focus:border-white outline-none transition-all tracking-[0.2em] shadow-2xl placeholder:text-gray-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((member) => (
                <div
                  key={member.id}
                  className={`relative group bg-[#0a0a0a] border ${member.color} p-6 rounded-2xl flex items-center gap-6 hover:bg-[#111111] hover:border-white transition-all duration-300 overflow-hidden shadow-xl`}
                >
                  <div className={`absolute top-0 left-0 w-1 h-full bg-current ${member.role === "VACANT" ? "text-gray-900" : "text-gray-500"} opacity-30`}></div>
                  <div className="absolute top-4 right-6 text-[10px] font-mono text-gray-800 group-hover:text-gray-500 transition-colors">
                    #{String(member.id).padStart(2, "0")}
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex items-center justify-center flex-shrink-0 group-hover:border-gray-500 transition-all relative overflow-hidden">
                    <span className="text-xl font-black text-gray-700 group-hover:text-white z-10">{member.name[0]}</span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex-grow">
                    <h4 className={`text-lg font-black tracking-tight ${member.role === "VACANT" ? "text-gray-800 italic" : "text-gray-100 group-hover:text-white"}`}>
                      {member.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[8px] font-bold px-2 py-0.5 rounded tracking-widest ${member.role === "VACANT" ? "bg-gray-900 text-gray-800" : "bg-white/5 text-gray-500 border border-gray-800"}`}>
                        {member.role === "VACANT" ? "VACANT" : `RANK: ${member.role}`}
                      </span>
                    </div>
                  </div>
                  {member.fb && member.role !== "VACANT" && (
                    <a href={member.fb} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-[#0e0e0e] flex items-center justify-center border border-gray-900 opacity-30 group-hover:opacity-100 group-hover:border-gray-600 transition-all hover:bg-white hover:text-black">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] text-gray-700 font-bold gap-4">
              <div>GATEWAY: ONLINE</div>
              <div>ACTIVE_MEMBERS: {allMembers.filter((m) => m.role !== "VACANT").length} / {allMembers.length}</div>
              <div className="uppercase">Last Synced: 2026-04-10</div>
            </div>
          </div>
        )}

        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <footer className="fixed bottom-6 w-full text-center text-[8px] tracking-[0.8em] text-gray-800 uppercase pointer-events-none z-50">
          Ghost Gang • Security Protocol v2.0
        </footer>
      </main>
    </>
  );
}
