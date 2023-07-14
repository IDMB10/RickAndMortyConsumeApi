const getHash = () => { //Obteniendo el id usando el hash es decir la ruta de la url #/1/
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

export default getHash;