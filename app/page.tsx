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

  // รวมรายชื่อสมาชิกทั้งหมด 21 คน พร้อมฟิลด์ fb และ tt
  const allMembers = [
    { id: 1, name: "Hunter castellano", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/hunter.castellano.2025?locale=th_TH", tt: "https://www.tiktok.com/@hunter_castellano?lang=th-TH" },
    { id: 2, name: "Nampunch Rubmaidai", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/nong.grace.954672?locale=th_TH", tt: "https://www.tiktok.com/@ryxlee_1?lang=th-TH" },
    { id: 3, name: "Bank Whatisluv", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/elle.whatisluv?locale=th_TH", tt: null },
    { id: 4, name: "Semi Gardos", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61587489156557&locale=th_TH", tt: null },
    { id: 5, name: "Razer Pentagram", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61578682112163&locale=th_TH", tt: null },
    { id: 6, name: "Cartier Layla", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=100025885462092&locale=th_TH", tt: null },
    { id: 7, name: "MeePhu Satxnic", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/meephu.satxnic?locale=th_TH", tt: null },
    { id: 8, name: "Saka Readyplus", role: "MEMBER", group: "GHOST GANG", color: "border-gray-900/30", fb: "https://web.facebook.com/saka.readyplus?locale=th_TH", tt: null },
    { id: 9, name: "Mindbabe Ygz", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/babebee.bebe?locale=th_TH", tt: "https://www.tiktok.com/@justbby88" },
    { id: 10, name: "Thingthing Hologram", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61579514684476&locale=th_TH", tt: null },
    { id: 11, name: "Ren Raknamaewmeow", role: "MEMBER", group: "GHOST GANG", color: "border-gray-900/30", fb: "https://web.facebook.com/Ren.WinterfellZiller?locale=th_TH", tt: "https://www.tiktok.com/@renwtfziller" },
    { id: 12, name: "Jxck Dernyoungsay", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61584726548593&locale=th_TH", tt: null },
    { id: 13, name: "Leo Payamarn", role: "MEMBER", group: "GHOST GANG", color: "border-gray-900/30", fb: "https://web.facebook.com/profile.php?id=61579549214581&locale=th_TH", tt: null },
    { id: 14, name: "Billy Diabalito", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61584032180777&locale=th_TH", tt: null },
    { id: 15, name: "Coco Ghost", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61581846855456&locale=th_TH", tt: null },
    { id: 16, name: "Ton Aor", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/tonaor.orapirn?locale=th_TH", tt: "https://www.tiktok.com/@love954480?lang=th-TH" },
    { id: 17, name: "Frame Nindwynd", role: "MEMBER", group: "GHOST GANG", color: "border-gray-900/30", fb: "https://web.facebook.com/frame.ninewynd?locale=th_TH", tt: null },
    { id: 18, name: "Rodin Daragods", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "#", tt: null },
    { id: 19, name: "Aiwee Inwza", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/AiweeMTN?locale=th_TH", tt: null },
    { id: 20, name: "Sense Primestage", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/profile.php?id=61581854482778&locale=th_TH", tt: null },
    { id: 21, name: "Fay Primestage", role: "MEMBER", group: "GHOST GANG", color: "border-gray-700", fb: "https://web.facebook.com/fay.388689/about?locale=th_TH", tt: "https://www.tiktok.com/@fayprimestage?lang=th-TH" },
  ];

  const filtered = allMembers.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <title>GHOSTGANG</title>

      {/* เพลงพื้นหลัง (ระดับเสียง 10%) */}
      {isPlaying && (
        <div style={{ position: "fixed", top: "-1000px", left: "-1000px", opacity: 0, pointerEvents: "none" }}>
          <iframe
            width="1"
            height="1"
            src="https://www.youtube.com/embed/WDuBvEoL_m4?autoplay=1&loop=1&playlist=WDuBvEoL_m4&enablejsapi=1"
            allow="autoplay"
            onLoad={(e) => {
              const frame = e.target as HTMLIFrameElement;
              setTimeout(() => {
                frame.contentWindow?.postMessage(JSON.stringify({
                  event: "command",
                  func: "setVolume",
                  args: [10] 
                }), "*");
              }, 1000);
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
              <span className="relative z-10 font-bold tracking-[0.4em] text-xs">Members List</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center font-bold tracking-[0.4em] text-xs text-black opacity-0 group-hover:opacity-100 transition-opacity">Access Directory</span>
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
                    <h4 className={`text-lg font-black tracking-tight text-gray-100 group-hover:text-white`}>
                      {member.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[8px] font-bold px-2 py-0.5 rounded tracking-widest bg-white/5 text-gray-500 border border-gray-800">
                        RANK: {member.role}
                      </span>
                    </div>
                  </div>

                  {/* ส่วน Social Buttons (Facebook & TikTok) */}
                  <div className="flex flex-col gap-2">
                    {member.fb && member.fb !== "#" && (
                      <a href={member.fb} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#0e0e0e] flex items-center justify-center border border-gray-900 opacity-30 hover:opacity-100 hover:bg-white hover:text-black transition-all">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </a>
                    )}
                    {member.tt && (
                      <a href={member.tt} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-[#0e0e0e] flex items-center justify-center border border-gray-900 opacity-30 hover:opacity-100 hover:bg-white hover:text-black transition-all">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.23-.76.42-1.33 1.21-1.43 2.06-.02.26-.01.52.02.78.13.9.84 1.68 1.71 1.93.42.13.88.13 1.32.09 1.14-.14 2.11-.99 2.4-2.11.13-.44.14-.9.14-1.35V.02z"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.4em] text-gray-700 font-bold gap-4">
              <div>GATEWAY: ONLINE</div>
              <div>ACTIVE_MEMBERS: {allMembers.length} / 21</div>
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
