import fs from "fs";
import path from "path";
import VintageTV from "../../components/VintageTV"; // Ajusta la ruta según tu estructura

export default async function GalleryPage() {
  
  // Cargar archivos en el servidor en el componente
  const mediaDir = path.join(process.cwd(), "public/media");
  const mediaFiles = fs
    .readdirSync(mediaDir)
    .filter((file) => /\.(jpg|jpeg|png|gif|mp4)$/.test(file)) // Filtra solo imágenes y videos
    .map((file) => `/media/${file}`); // Devuelve las rutas de los archivos

  return <VintageTV mediaFiles={mediaFiles} />;
}


