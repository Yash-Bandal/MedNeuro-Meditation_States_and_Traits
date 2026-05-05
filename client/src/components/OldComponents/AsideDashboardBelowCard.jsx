{
    activeTab === "overview" && (
        <>
            {/* MAIN WRAPPER */}
            <section className="space-y-6">

                {/* 1. SUMMARY CARDS (TOP) */}
                <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {memoSummaryCards.map(({ title, value, icon: Icon, tone }) => (
                        <div key={title} className="rounded-xl border border-slate-200 bg-white p-4">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs text-slate-500">{title}</p>
                                <span className={`inline-flex p-2 rounded-lg ${tone}`}>
                                    <Icon size={14} />
                                </span>
                            </div>
                            <p className="text-2xl font-semibold text-slate-800">{value}</p>
                        </div>
                    ))}
                </section>

                {/* 2. MAIN CONTENT + ASIDE */}
                <section className="flex gap-6">

                    {/* LEFT SIDE */}
                    <div className="flex-1 space-y-6">

                        {/* Charts + Quick Actions */}
                        <section className="grid grid-cols-1 xl:grid-cols-2 gap-5">

                            {/* BAR CHART */}
                            <div className="rounded-xl border border-slate-200 bg-white p-4">
                                <p className="text-sm font-semibold text-slate-700 mb-3">
                                    Gamma Power Across Meditation Groups
                                </p>

                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={gammaGroupData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="group" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="gamma" radius={[6, 6, 0, 0]}>
                                                {gammaGroupData.map((entry) => (
                                                    <Cell
                                                        key={entry.group}
                                                        fill={
                                                            entry.group === "SNY"
                                                                ? "#6366F1"
                                                                : "#94A3B8"
                                                        }
                                                    />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                <p className="text-xs text-slate-500 mt-3">
                                    Shoonya (SNY) shows significantly higher gamma power compared to other groups.
                                </p>
                            </div>

                            {/* QUICK ACTIONS + VIDEO */}
                            <div className="rounded-xl border border-slate-200 bg-white p-4 flex gap-4">

                                {/* LEFT */}
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-slate-700 mb-3">
                                        Quick Actions
                                    </p>

                                    <div className="grid grid-cols-1 gap-3">
                                        {memoModules.map(({ title, desc, to, icon: Icon }) => (
                                            <Link
                                                key={to}
                                                to={to}
                                                className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition-colors"
                                            >
                                                <div className="flex items-center gap-2 mb-1 text-slate-700">
                                                    <Icon size={16} />
                                                    <span className="text-sm font-medium">{title}</span>
                                                </div>
                                                <p className="text-xs text-slate-500">{desc}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT VIDEO */}
                                <div className="w-1/2 flex items-center justify-center">
                                    <video
                                        src={MedLoop}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full max-h-[220px] object-contain rounded-lg"
                                    />
                                </div>

                            </div>
                        </section>

                        {/* EEG GRAPH */}
                        <BrainWaveEEGTracings />

                    </div>

                    {/* RIGHT SIDE ASIDE */}
                    <aside className="hidden xl:block w-[320px] shrink-0 space-y-5">

                        {/* Categories */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="text-sm font-semibold text-slate-700 mb-3">
                                Categories Analysis
                            </p>

                            <div className="relative w-full h-40">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={sidebarStats}
                                            dataKey="pct"
                                            nameKey="label"
                                            cx="50%"
                                            cy="100%"
                                            startAngle={180}
                                            endAngle={0}
                                            innerRadius={60}
                                            outerRadius={90}
                                        >
                                            {sidebarStats.map((entry, index) => (
                                                <Cell key={index} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>

                                <div className="absolute inset-0 flex items-end justify-center pb-4">
                                    <p className="text-xl font-semibold text-slate-800">
                                        {sidebarStats.reduce((acc, cur) => acc + cur.pct, 0)}%
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Countries */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="text-sm font-semibold text-slate-700 mb-3">
                                Details Countries
                            </p>

                            <div className="rounded-xl overflow-hidden border border-slate-200 h-44 mb-4">
                                <iframe
                                    title="World map"
                                    src="https://maps.google.com/maps?q=India&z=2&output=embed"
                                    className="w-full h-full"
                                    loading="lazy"
                                />
                            </div>

                            <div className="space-y-2">
                                {countryRows.map((row) => (
                                    <div key={row.country} className="flex items-center justify-between text-xs">
                                        <span>{row.country}</span>
                                        <span>{row.weight}</span>
                                        <span className="font-medium">{row.sessions}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </aside>

                </section>
            </section>
        </>
    )
}