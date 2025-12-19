import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import NavBar from "../components/navbar";
import "../css/mapa.css";

const locs = [
  {
    coords: [-8.058467379904435, -34.90690108834618],
    name: "Policlínica Lessa de Andrade",
  },
  {
    coords: [-8.119015842136228, -34.9056254576727],
    name: "Centro de Vacinação Shopping Recife",
  },
  {
    coords: [-8.085741693026705, -34.894010690777264],
    name: "Centro de Vacinação Shopping RioMar",
  },
  {
    coords: [-8.059209190562703, -34.88661157611026],
    name: "Centro de Vacinação Shopping Boa Vista",
  },
  {
    coords: [-8.080644846527486, -34.905284944163924],
    name: "Policlínica Agamenon Magalhães",
  },
  {
    coords: [-8.1165591001133, -34.911188830417466],
    name: "Centro de Saúde Vereador Romildo Gomes",
  },
  {
    coords: [-8.147857089453229, -34.9137937324265],
    name: "Centro de Saúde Professor Djair Brindeiro",
  },
  {
    coords: [-8.001087633443033, -34.92457175765642],
    name: "USF+ Professor Bruno Maia",
  },
  {
    coords: [-8.119458772620279, -34.94796525714446],
    name: "Centro de Saúde Sebastião Ivo Rabelo",
  },
  {
    coords: [-8.015839183862314, -34.882493365073856],
    name: "Policlínica Amaury Coutinho",
  },
  {
    coords: [-8.010947836901314, -34.90416382089223],
    name: "USF+ Alto do Pascoal",
  },
  {
    coords: [-8.011819643772576, -34.952193620892295],
    name: "USF Córrego da Fortuna",
  },
  {
    coords: [-8.046526088666345, -34.959381836236915],
    name: "USF+ Upinha 24H Vila Arraes",
  },
  {
    coords: [-8.079529422842915, -34.97053451903644],
    name: "USF+ Bidu Krause",
  },
  {
    coords: [-8.080251217246152, -34.93803722766813],
    name: "USF+ Jardim São Paulo",
  },
  {
    coords: [-8.01930700931389, -34.91976010740107],
    name: "Policlínica Clementino Fraga",
  },
  {
    coords: [-8.131367472500482, -34.93703302089001],
    name: "Centro de Saúde Dr. Aristarcho Dourado de Azevedo",
  },
  {
    coords: [-8.02738349416565, -34.91863766532875],
    name: "CS Francisco Pignatari",
  },
  {
    coords: [-8.07270635682715, -34.89636253623662],
    name: "USF+ São José do Coque",
  },
  {
    coords: [-8.066689057703627, -34.89029352325561],
    name: "IMIP",
  },
];

function MeuMapa() {
  const mapInstanciaRef = useRef(null);

  useEffect(() => {
    if (!mapInstanciaRef.current) {
      var map = L.map("map", { zoomControl: false }).setView(
        locs[0].coords,
        13
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        minZoom: 12,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      locations.forEach((location) => {
        L.marker(location.coords).addTo(map).bindTooltip(location.name);
      });

      mapInstanciaRef.current = map;
    }

    // cleanup pra evitar erros de memória se o componente desmontar
    return () => {
      if (mapInstanciaRef.current) {
        mapInstanciaRef.current.remove();
        mapInstanciaRef.current = null;
      }
    };
  }, []);

  return (
    <div className="pagina-mapa">
      <NavBar />
      <div id="map" className="mapa-container" />
    </div>
  );
}

export default MeuMapa;
