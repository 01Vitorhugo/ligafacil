import { useState, useEffect } from "react";
import { auth } from "../../database";
import { db } from "../../database";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import banner from "../../assets/banner_home.png";
import CardGame from "../../components/cardgame";

export default function Home() {
    const [games, setGames] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Escutar mudanças na autenticação
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
                fetchGames(user.uid); // Carregar os jogos quando o usuário estiver disponível
            }
        });

        return () => unsubscribe(); // Cleanup do listener ao desmontar
    }, []);

    // Função para buscar os jogos do usuário autenticado
    const fetchGames = async (userId) => {
        if (!userId) return;

        try {
            const gamesRef = collection(db, "users", userId, "games");
            const snapshot = await getDocs(gamesRef);
            const gamesData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setGames(gamesData);
        } catch (error) {
            console.error("Erro ao buscar jogos:", error);
        }
    };

    return (
        <div className="w-full h-auto">
              <figure className="h-[252px]">
                <img src={banner} alt="banner home" />
              </figure>

        

            {games.length === 0 ? (
                <p className="text-gray-500">Nenhum jogo publicado ainda.</p>
            ) : (
                <ul>
                    {games.map(game => (
                        <li key={game.id}>
                            <CardGame data={game.data} horario={game.horario} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}