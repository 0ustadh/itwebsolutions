 // Main program
    // Temperature converter
    window.onload = function() {
        let c = document.getElementById("celsius");
        let f = document.getElementById("fahr");
        let k = document.getElementById("kev");
        c.oninput = function() {
            f.value = (c.valueAsNumber * 9/5) + 32;
            k.value = (c.valueAsNumber + 273.15);
        };
        f.oninput = function() {
            c.value = (f.valueAsNumber - 32) * 5/9;
            k.value = (c.valueAsNumber + 273.15);
        }
        k.oninput = function() {
            c.value = (k.valueAsNumber - 273.15);
            f.value = 9/5*(k.valueAsNumber-273.15)+32;
        }
        // Temperature converter end
        
        // Weight converter
        let tn = document.getElementById("ton");
        let st = document.getElementById("stone");
        let g = document.getElementById("kilo");
        let h = document.getElementById("pound");
        let oz = document.getElementById("ounce");
        let gm = document.getElementById("gram");
        tn.oninput = function() {
            st.value = (tn.valueAsNumber*1000)*0.15747;
            g.value = (tn.valueAsNumber*1000);
            h.value = (tn.valueAsNumber*1000)/0.454;
            oz.value = (tn.valueAsNumber*1000)*35.274;
            gm.value = (tn.valueAsNumber*1000)*1000;
        }
        st.oninput = function() {
            tn.value = (st.valueAsNumber*1000)/0.15747;
            g.value = (st.valueAsNumber/0.15747);
            h.value = (st.valueAsNumber*0.0625);
            oz.value = (st.valueAsNumber/0.0044643);
            gm.value = (st.valueAsNumber/0.15747)/1000;
        }
        g.oninput = function() {
            tn.value = (g.valueAsNumber/1000);
            st.value = (g.valueAsNumber*0.15747);
            h.value = (g.valueAsNumber / 0.454);
            oz.value = (g.valueAsNumber*35.274);
            gm.value = (g.valueAsNumber*1000);
        };
        h.oninput = function() {
            tn.value = (h.valueAsNumber*0.454)/1000;
            st.value = (h.valueAsNumber*0.071429);
            g.value = (h.valueAsNumber * 0.454);
            oz.value = (h.valueAsNumber*16);
            gm.value = (h.valueAsNumber*454);
        };
        oz.oninput = function() {
            tn.value = (oz.valueAsNumber/1000)/35.274;
            st.value = (oz.valueAsNumber*0.0044643);
            g.value = (oz.valueAsNumber/35.274);
            h.value = (oz.valueAsNumber/16);
            gm.value = (oz.valueAsNumber/0.035274);
        }
        gm.oninput = function() {
            tn.value = (gm.valueAsNumber/1000)/1000;
            st.value = (gm.valueAsNumber*0.00015747);
            g.value = (gm.valueAsNumber/1000);
            h.value = (gm.valueAsNumber/454);
            oz.value = (gm.valueAsNumber*0.035274);
        }
      // Weight converter end
      
      // Length converter
      let mi = document.getElementById("mile");
      let km = document.getElementById("kms");
      let m = document.getElementById("meter");
      let cm = document.getElementById("cmtr");
      let mm = document.getElementById("mmtr");
      let i = document.getElementById("inch");
      let ft = document.getElementById("feet");
      let yd = document.getElementById("yards");
      m.oninput = function() {
          cm.value = (m.valueAsNumber*100);
          mm.value = (m.valueAsNumber*100)*10;
          i.value = (m.valueAsNumber*100)/2.54;
          ft.value = (m.valueAsNumber*3.2808);
          yd.value = (m.valueAsNumber*1.0936);
          km.value = (m.valueAsNumber/1000);
          mi.value = (m.valueAsNumber/1000)*0.62137;
      }
      cm.oninput = function() {
          m.value = (cm.valueAsNumber/100);
          mm.value = (cm.valueAsNumber*10);
          i.value = (cm.valueAsNumber/2.54);
          ft.value = (cm.valueAsNumber/100)*3.2808;
          yd.value = (cm.valueAsNumber*0.010936);
          km.value = (cm.valueAsNumber/1000)/100;
          mi.value = (cm.valueAsNumber*0.0000062137);
      }
      mm.oninput = function() {
          cm.value = (mm.valueAsNumber/10);
          m.value = (mm.valueAsNumber/100)/10;
          i.value = (mm.valueAsNumber/10)/2.54;
          ft.value = (mm.valueAsNumber/10)*3.2808;
          yd.value = (mm.valueAsNumber*0.010936)/10;
          km.value = (mm.valueAsNumber/1000)/(100*10);
          mi.value = (mm.valueAsNumber*0.0000062137)/10;
      }
      i.oninput = function() {
          m.value = (i.valueAsNumber/100)*2.54;
          cm.value = (i.valueAsNumber*2.54);
          mm.value = (i.valueAsNumber*2.54)*10;
          ft.value = (i.valueAsNumber/12);
          yd.value = (i.valueAsNumber/36);
          km.value = (i.valueAsNumber/39370);
          mi.value = (i.valueAsNumber*0.000015783);
      
      }
      ft.oninput = function() {
          m.value = (ft.valueAsNumber/3.2808);
          cm.value = (ft.valueAsNumber/3.2808)*100;
          mm.value = (ft.valueAsNumber/3.2808)*(100*10);
          i.value = (ft.valueAsNumber*12);
          yd.value = (ft.valueAsNumber/3);
          km.value = (ft.valueAsNumber/3280.8);
          mi.value = (ft.valueAsNumber*0.00018939);
      }
      yd.oninput = function() {
          m.value = (yd.valueAsNumber/1.0936);
          cm.value = (yd.valueAsNumber/1.0936)*100;
          mm.value = (yd.valueAsNumber/1.0936)*(100*10);
          i.value = (yd.valueAsNumber*36);
          ft.value = (yd.valueAsNumber*3);
          km.value = (yd.valueAsNumber/1093.6);
          mi.value = (yd.valueAsNumber/1760);
      }
      km.oninput = function() {
          m.value = (km.valueAsNumber*1000);
          cm.value = (km.valueAsNumber*1000)*100;
          mm.value = (km.valueAsNumber*1000)*(100*10);
          i.value = (km.valueAsNumber*39370);
          ft.value = (km.valueAsNumber*3280.8);
          yd.value = (km.valueAsNumber*1093.6);
          mi.value = (km.valueAsNumber*0.62137);
      }
      mi.oninput = function() {
          m.value = (mi.valueAsNumber*1000)/0.62137;
          cm.value = (mi.valueAsNumber/0.0000062137);
          mm.value = (mi.valueAsNumber/0.0000062137)*10;
          i.value = (mi.valueAsNumber/0.000015783);
          ft.value = (mi.valueAsNumber*5280);
          yd.value = (mi.valueAsNumber*1760);
          km.value = (mi.valueAsNumber/0.62137);
      }
      // Length converter end
      
      // Speed converter
      let mp = document.getElementById("mph");
      let kp = document.getElementById("kph");
      let kn = document.getElementById("knots");
      let mc = document.getElementById("mach");
      mp.oninput = function() {
          kp.value = (mp.valueAsNumber*1.609344);
          kn.value = (mp.valueAsNumber/1.150779);
          mc.value = (mp.valueAsNumber/761.207);
      }
      kp.oninput = function() {
          mp.value = (kp.valueAsNumber/1.609344);
          kn.value = (kp.valueAsNumber/1.852);
          mc.value = (kp.valueAsNumber/1225.044);
      }
      kn.oninput = function() {
          mp.value = (kn.valueAsNumber*1.150779);
          kp.value = (kn.valueAsNumber*1.852);
          mc.value = (kn.valueAsNumber/661.4708);
      }
      mc.oninput = function() {
          mp.value = (mc.valueAsNumber*761.207);
          kp.value = (mc.valueAsNumber*1225.044);
          kn.value = (mc.valueAsNumber*661.4708);
      }
      // Speed converter end
      };
      // Main program end