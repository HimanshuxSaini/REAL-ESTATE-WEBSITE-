import React from 'react';

interface CityCountrysideSkylineProps {
  className?: string;
}

export const CityCountrysideSkyline: React.FC<CityCountrysideSkylineProps> = ({
  className = "w-full max-w-3xl mx-auto text-[#d6c4ae] opacity-80"
}) => {
  return (
    <div className={`overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1600 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-16 sm:max-h-20 md:max-h-24"
        preserveAspectRatio="xMidYMax meet"
      >
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          
          {/* BASELINE GROUND */}
          <line x1="0" y1="156" x2="1600" y2="156" strokeWidth="1.5" />

          {/* ============================================================ */}
          {/* SECTION 1: METROPOLIS / URBAN CITY SKYLINE (LEFT 0 - 550) */}
          {/* ============================================================ */}

          {/* Building 1: Stepped Glass Tower */}
          <rect x="25" y="65" width="40" height="91" fill="white" fillOpacity="0.4" />
          <line x1="33" y1="75" x2="33" y2="148" strokeDasharray="3 3" />
          <line x1="45" y1="75" x2="45" y2="148" strokeDasharray="3 3" />
          <line x1="57" y1="75" x2="57" y2="148" strokeDasharray="3 3" />
          <line x1="25" y1="90" x2="65" y2="90" />
          <line x1="25" y1="115" x2="65" y2="115" />
          <line x1="25" y1="135" x2="65" y2="135" />

          {/* Building 2: Slanted Roof Skyscraper with Spire */}
          <path d="M72 156 V55 L102 38 V156 Z" fill="white" fillOpacity="0.5" />
          <line x1="102" y1="38" x2="102" y2="20" />
          <circle cx="102" cy="18" r="1.5" fill="currentColor" />
          <line x1="82" y1="58" x2="82" y2="148" strokeDasharray="4 3" />
          <line x1="92" y1="58" x2="92" y2="148" strokeDasharray="4 3" />
          <line x1="72" y1="80" x2="102" y2="80" />
          <line x1="72" y1="110" x2="102" y2="110" />
          <line x1="72" y1="135" x2="102" y2="135" />

          {/* Building 3: Curved Tower with Antenna */}
          <path d="M108 156 V45 Q120 40 135 52 V156 Z" fill="white" fillOpacity="0.4" />
          <line x1="120" y1="41" x2="120" y2="24" />
          <line x1="116" y1="65" x2="127" y2="65" />
          <line x1="116" y1="85" x2="127" y2="85" />
          <line x1="116" y1="105" x2="127" y2="105" />
          <line x1="116" y1="125" x2="127" y2="125" />
          <line x1="116" y1="145" x2="127" y2="145" />

          {/* City Attraction: Ferris Wheel */}
          <circle cx="170" cy="118" r="28" strokeDasharray="4 3" />
          <circle cx="170" cy="118" r="22" />
          <circle cx="170" cy="118" r="3" fill="currentColor" />
          {/* Spokes */}
          <line x1="170" y1="90" x2="170" y2="146" />
          <line x1="142" y1="118" x2="198" y2="118" />
          <line x1="150" y1="98" x2="190" y2="138" />
          <line x1="150" y1="138" x2="190" y2="98" />
          {/* Wheel Support Legs */}
          <line x1="170" y1="118" x2="155" y2="156" />
          <line x1="170" y1="118" x2="185" y2="156" />

          {/* Building 4: Twin High-Rise Business Complex */}
          <rect x="208" y="70" width="30" height="86" fill="white" fillOpacity="0.5" />
          <polygon points="208,70 223,55 238,70" />
          <rect x="242" y="60" width="36" height="96" fill="white" fillOpacity="0.5" />
          <polygon points="242,60 260,42 278,60" />
          <line x1="260" y1="42" x2="260" y2="28" />
          {/* Twin Tower Skybridge */}
          <rect x="238" y="92" width="4" height="12" />
          {/* Windows */}
          <line x1="218" y1="80" x2="218" y2="146" strokeDasharray="3 3" />
          <line x1="228" y1="80" x2="228" y2="146" strokeDasharray="3 3" />
          <line x1="254" y1="72" x2="254" y2="146" strokeDasharray="3 3" />
          <line x1="266" y1="72" x2="266" y2="146" strokeDasharray="3 3" />

          {/* City Tree & Streetlight */}
          <line x1="292" y1="156" x2="292" y2="134" />
          <circle cx="292" cy="132" r="2" fill="currentColor" />
          <circle cx="304" cy="142" r="8" fill="white" fillOpacity="0.4" />
          <line x1="304" y1="150" x2="304" y2="156" />

          {/* Building 5: Tall Monolith Corporate Tower with Grid */}
          <rect x="320" y="44" width="46" height="112" fill="white" fillOpacity="0.6" rx="2" />
          {/* Grid lines */}
          <line x1="320" y1="58" x2="366" y2="58" />
          <line x1="320" y1="72" x2="366" y2="72" />
          <line x1="320" y1="86" x2="366" y2="86" />
          <line x1="320" y1="100" x2="366" y2="100" />
          <line x1="320" y1="114" x2="366" y2="114" />
          <line x1="320" y1="128" x2="366" y2="128" />
          <line x1="320" y1="142" x2="366" y2="142" />
          <line x1="335" y1="44" x2="335" y2="156" />
          <line x1="351" y1="44" x2="351" y2="156" />

          {/* Building 6: Modern Condominiums & Flats */}
          <rect x="375" y="112" width="48" height="44" fill="white" fillOpacity="0.4" />
          <polygon points="372,112 399,94 426,112" />
          <rect x="385" y="122" width="8" height="10" />
          <rect x="405" y="122" width="8" height="10" />
          <rect x="395" y="140" width="8" height="16" />

          {/* Building 7: Commercial Center with Clock/Logo */}
          <rect x="430" y="82" width="56" height="74" fill="white" fillOpacity="0.5" />
          <rect x="440" y="74" width="36" height="8" />
          {/* Windows columns */}
          <circle cx="458" cy="95" r="5" />
          <line x1="440" y1="110" x2="476" y2="110" />
          <line x1="440" y1="126" x2="476" y2="126" />
          <line x1="440" y1="142" x2="476" y2="142" />
          <line x1="448" y1="104" x2="448" y2="156" />
          <line x1="468" y1="104" x2="468" y2="156" />

          {/* Building 8: Sail-shaped Skyline Tower (Iconic) */}
          <path d="M495 156 V68 Q525 50 545 156 Z" fill="white" fillOpacity="0.5" />
          <line x1="508" y1="80" x2="528" y2="80" />
          <line x1="508" y1="100" x2="534" y2="100" />
          <line x1="508" y1="120" x2="538" y2="120" />
          <line x1="508" y1="140" x2="542" y2="140" />
          <line x1="508" y1="72" x2="508" y2="156" />
          <line x1="520" y1="72" x2="520" y2="156" />

          {/* ============================================================ */}
          {/* SECTION 2: TRANSITION ZONE / SUBURBAN RESIDENTIAL (550 - 1050) */}
          {/* ============================================================ */}

          {/* Stepped Urban Offices */}
          <path d="M552 156 V62 H578 V88 H600 V156 Z" fill="white" fillOpacity="0.5" />
          <line x1="565" y1="62" x2="565" y2="40" />
          <line x1="560" y1="74" x2="570" y2="74" />
          <line x1="560" y1="92" x2="592" y2="92" />
          <line x1="560" y1="112" x2="592" y2="112" />
          <line x1="560" y1="132" x2="592" y2="132" />

          {/* Mid-rise Apartments with Balconies */}
          <rect x="608" y="96" width="38" height="60" fill="white" fillOpacity="0.4" />
          <line x1="614" y1="108" x2="624" y2="108" />
          <line x1="614" y1="122" x2="624" y2="122" />
          <line x1="614" y1="136" x2="624" y2="136" />
          <line x1="630" y1="108" x2="640" y2="108" />
          <line x1="630" y1="122" x2="640" y2="122" />
          <line x1="630" y1="136" x2="640" y2="136" />

          {/* Modern Municipal / Library Hub */}
          <path d="M654 156 V55 L674 44 V156 Z" fill="white" fillOpacity="0.5" />
          <rect x="680" y="74" width="42" height="82" fill="white" fillOpacity="0.4" />
          <circle cx="701" cy="90" r="4" />
          <line x1="688" y1="106" x2="714" y2="106" />
          <line x1="688" y1="122" x2="714" y2="122" />
          <line x1="688" y1="138" x2="714" y2="138" />

          {/* Suburban Park: Trees & Greenery */}
          <path d="M734 140 Q740 125 750 140 Q756 156 734 156 Z" fill="white" fillOpacity="0.4" />
          <circle cx="762" cy="138" r="10" fill="white" fillOpacity="0.4" />
          <line x1="762" y1="148" x2="762" y2="156" />

          {/* Suburban Luxury House with Gable & Dormer */}
          <rect x="782" y="115" width="56" height="41" fill="white" fillOpacity="0.5" />
          <polygon points="778,115 810,90 842,115" />
          <polygon points="800,98 810,90 820,98" />
          <rect x="792" y="126" width="10" height="12" />
          <rect x="820" y="126" width="10" height="12" />
          <rect x="805" y="136" width="10" height="20" />
          <line x1="828" y1="92" x2="828" y2="82" />

          {/* Modern Institutional Building / Town School with Pillars */}
          <rect x="850" y="80" width="52" height="76" fill="white" fillOpacity="0.5" />
          <polygon points="846,80 876,64 906,80" />
          <line x1="860" y1="84" x2="860" y2="156" />
          <line x1="872" y1="84" x2="872" y2="156" />
          <line x1="884" y1="84" x2="884" y2="156" />
          <line x1="896" y1="84" x2="896" y2="156" />

          {/* Garden & Trees */}
          <circle cx="918" cy="138" r="9" fill="white" fillOpacity="0.4" />
          <line x1="918" y1="147" x2="918" y2="156" />
          <circle cx="932" cy="132" r="12" fill="white" fillOpacity="0.4" />
          <line x1="932" y1="144" x2="932" y2="156" />

          {/* Suburban Single Family Home */}
          <rect x="952" y="112" width="48" height="44" fill="white" fillOpacity="0.5" />
          <polygon points="948,112 976,92 1004,112" />
          <rect x="960" y="122" width="8" height="10" />
          <rect x="984" y="122" width="8" height="10" />
          <rect x="972" y="134" width="8" height="22" />

          {/* ============================================================ */}
          {/* SECTION 3: RURAL & COUNTRYSIDE FARMLAND (1050 - 1600) */}
          {/* ============================================================ */}

          {/* Traditional Country Windmill */}
          <path d="M1038 156 L1046 88 H1062 L1070 156 Z" fill="white" fillOpacity="0.5" />
          <polygon points="1044,88 1054,72 1064,88" />
          <circle cx="1054" cy="94" r="3" fill="currentColor" />
          {/* Windmill Sails */}
          <line x1="1054" y1="94" x2="1030" y2="70" strokeWidth="1.4" />
          <line x1="1054" y1="94" x2="1078" y2="118" strokeWidth="1.4" />
          <line x1="1054" y1="94" x2="1030" y2="118" strokeWidth="1.4" />
          <line x1="1054" y1="94" x2="1078" y2="70" strokeWidth="1.4" />
          {/* Sail lattice */}
          <line x1="1032" y1="72" x2="1040" y2="64" />
          <line x1="1042" y1="82" x2="1050" y2="74" />
          <line x1="1068" y1="108" x2="1076" y2="100" />
          <line x1="1058" y1="98" x2="1066" y2="90" />

          {/* Rolled Hay Bales */}
          <ellipse cx="1092" cy="148" rx="8" ry="8" fill="white" fillOpacity="0.5" />
          <circle cx="1092" cy="148" r="4" strokeDasharray="2 2" />
          <ellipse cx="1108" cy="148" rx="8" ry="8" fill="white" fillOpacity="0.5" />
          <circle cx="1108" cy="148" r="4" strokeDasharray="2 2" />
          <ellipse cx="1100" cy="136" rx="8" ry="8" fill="white" fillOpacity="0.5" />
          <circle cx="1100" cy="136" r="4" strokeDasharray="2 2" />

          {/* Modern Eco Wind Turbine 1 */}
          <line x1="1144" y1="156" x2="1144" y2="60" strokeWidth="1.6" />
          <circle cx="1144" cy="60" r="3" fill="currentColor" />
          <line x1="1144" y1="60" x2="1144" y2="28" strokeWidth="1.3" />
          <line x1="1144" y1="60" x2="1118" y2="76" strokeWidth="1.3" />
          <line x1="1144" y1="60" x2="1170" y2="76" strokeWidth="1.3" />

          {/* Elevated Country Water Tower */}
          <rect x="1190" y="76" width="34" height="24" rx="2" fill="white" fillOpacity="0.5" />
          <polygon points="1186,76 1207,64 1228,76" />
          {/* Leg posts with cross braces */}
          <line x1="1194" y1="100" x2="1190" y2="156" strokeWidth="1.4" />
          <line x1="1220" y1="100" x2="1224" y2="156" strokeWidth="1.4" />
          <line x1="1194" y1="100" x2="1224" y2="156" strokeDasharray="4 4" />
          <line x1="1220" y1="100" x2="1190" y2="156" strokeDasharray="4 4" />
          <line x1="1192" y1="128" x2="1222" y2="128" />

          {/* Farmland Trees & Orchard */}
          <circle cx="1250" cy="136" r="12" fill="white" fillOpacity="0.4" />
          <line x1="1250" y1="148" x2="1250" y2="156" />
          <circle cx="1270" cy="132" r="15" fill="white" fillOpacity="0.4" />
          <line x1="1270" y1="147" x2="1270" y2="156" />

          {/* Farm House & Granary Barn */}
          <rect x="1295" y="105" width="46" height="51" fill="white" fillOpacity="0.5" />
          <polygon points="1291,105 1318,84 1345,105" />
          <rect x="1305" y="118" width="10" height="12" />
          <rect x="1325" y="118" width="10" height="12" />
          <rect x="1313" y="136" width="10" height="20" />
          {/* Weathercock / Cupola */}
          <rect x="1314" y="76" width="8" height="8" />
          <polygon points="1312,76 1318,68 1324,76" />

          {/* Adjoining Barn with X Door */}
          <rect x="1345" y="115" width="38" height="41" fill="white" fillOpacity="0.4" />
          <polygon points="1342,115 1364,98 1386,115" />
          <rect x="1355" y="128" width="18" height="28" />
          <line x1="1355" y1="128" x2="1373" y2="156" />
          <line x1="1373" y1="128" x2="1355" y2="156" />

          {/* Modern Wind Turbine 2 */}
          <line x1="1425" y1="156" x2="1425" y2="52" strokeWidth="1.6" />
          <circle cx="1425" cy="52" r="3" fill="currentColor" />
          <line x1="1425" y1="52" x2="1425" y2="18" strokeWidth="1.3" />
          <line x1="1425" y1="52" x2="1398" y2="70" strokeWidth="1.3" />
          <line x1="1425" y1="52" x2="1452" y2="70" strokeWidth="1.3" />

          {/* Pine Trees and Country Farm Pickup */}
          <polygon points="1460,156 1468,130 1476,156" fill="white" fillOpacity="0.4" />
          <polygon points="1475,156 1485,124 1495,156" fill="white" fillOpacity="0.4" />
          
          {/* Tractor / Country Utility Vehicle */}
          <rect x="1510" y="140" width="22" height="12" rx="2" fill="white" fillOpacity="0.5" />
          <polygon points="1510,140 1518,130 1528,130 1532,140" fill="white" fillOpacity="0.5" />
          <circle cx="1516" cy="152" r="4" strokeWidth="1.5" />
          <circle cx="1528" cy="152" r="4" strokeWidth="1.5" />
          
          {/* End of field fence */}
          <line x1="1545" y1="150" x2="1595" y2="150" strokeDasharray="3 3" />
          <line x1="1545" y1="145" x2="1545" y2="156" />
          <line x1="1560" y1="145" x2="1560" y2="156" />
          <line x1="1575" y1="145" x2="1575" y2="156" />
          <line x1="1590" y1="145" x2="1590" y2="156" />

        </g>
      </svg>
    </div>
  );
};
