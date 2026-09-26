(function () {
  const routes = [
    [[-0.13,51.51],[-74.01,40.71]], [[-0.13,51.51],[55.27,25.20]],
    [[-0.13,51.51],[18.42,-33.93]], [[-0.13,51.51],[103.82,1.35]],
    [[-74.01,40.71],[-46.63,-23.55]], [[55.27,25.20],[103.82,1.35]]
  ];

  window.startAnvilGlobe = async function (canvas) {
    const ctx = canvas.getContext('2d');
    const world = await fetch('assets/countries-110m.json').then(r => r.json());
    const land = topojson.feature(world, world.objects.land);
    const borders = topojson.mesh(world, world.objects.countries, (a,b) => a !== b);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let start = performance.now();

    function frame(now) {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(devicePixelRatio || 1, 2);
      const w = Math.round(rect.width), h = Math.round(rect.height);
      if (canvas.width !== w * ratio || canvas.height !== h * ratio) {
        canvas.width = w * ratio; canvas.height = h * ratio;
      }
      ctx.setTransform(ratio,0,0,ratio,0,0);
      ctx.clearRect(0,0,w,h);

      const mobile = w < 720;
      const radius = mobile ? Math.min(w * .43, h * .26) : Math.min(w * .25, h * .34);
      const cx = w * .5;
      const cy = mobile ? h * .31 : h * .40;
      const elapsed = (now - start) / 1000;
      const rotation = reduced ? -12 : -12 - elapsed * 3.2;
      const projection = d3.geoOrthographic().translate([cx,cy]).scale(radius).rotate([rotation,-12,-4]).clipAngle(90).precision(.35);
      const path = d3.geoPath(projection,ctx);

      ctx.save();
      ctx.shadowColor = 'rgba(210,174,115,.24)'; ctx.shadowBlur = 36;
      const ocean = ctx.createRadialGradient(cx-radius*.3,cy-radius*.35,radius*.08,cx,cy,radius);
      ocean.addColorStop(0,'#203a30'); ocean.addColorStop(.5,'#10231d'); ocean.addColorStop(1,'#050807');
      ctx.beginPath(); path({type:'Sphere'}); ctx.fillStyle=ocean; ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath(); path(d3.geoGraticule10()); ctx.strokeStyle='rgba(210,174,115,.09)'; ctx.lineWidth=.55; ctx.stroke();
      ctx.beginPath(); path(land); ctx.fillStyle='#756449'; ctx.fill();
      ctx.beginPath(); path(land); ctx.strokeStyle='rgba(225,199,146,.58)'; ctx.lineWidth=.75; ctx.stroke();
      ctx.beginPath(); path(borders); ctx.strokeStyle='rgba(8,15,12,.55)'; ctx.lineWidth=.45; ctx.stroke();

      routes.forEach((route,i) => {
        const interp = d3.geoInterpolate(route[0],route[1]);
        const points = d3.range(0,1.001,.025).map(interp);
        ctx.beginPath(); path({type:'LineString',coordinates:points});
        ctx.strokeStyle='rgba(210,174,115,.34)'; ctx.lineWidth=1; ctx.stroke();

        const phase = reduced ? .35 : (elapsed * .16 + i * .19) % 1;
        const p = projection(interp(phase));
        if (p && d3.geoDistance(interp(phase),[-rotation,12]) < Math.PI/2) {
          const pulse=ctx.createRadialGradient(p[0],p[1],0,p[0],p[1],10);
          pulse.addColorStop(0,'rgba(255,233,174,1)'); pulse.addColorStop(.22,'rgba(226,177,87,.92)'); pulse.addColorStop(1,'rgba(210,174,115,0)');
          ctx.beginPath(); ctx.arc(p[0],p[1],10,0,Math.PI*2); ctx.fillStyle=pulse; ctx.fill();
          ctx.beginPath(); ctx.arc(p[0],p[1],2.1,0,Math.PI*2); ctx.fillStyle='#ffe4a8'; ctx.fill();
        }
      });

      ctx.beginPath(); path({type:'Sphere'}); ctx.strokeStyle='rgba(223,191,126,.55)'; ctx.lineWidth=1.2; ctx.stroke();
      ctx.restore();
      if (!reduced) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  };
})();
