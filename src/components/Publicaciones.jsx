import ModalReact from './ModalReact';
import { getPublicaciones, deletePublicacion } from '../services/postService';
import { useState, useEffect } from 'react';
const Publicaciones = () => {
    const [publis, setPublis] = useState([]);

    const getAllPublicaciones = async () => {
      const data = await getPublicaciones()
      setPublis(data);
    }
  
    useEffect(() => {
      getAllPublicaciones()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm("¿Estas seguro de eliminar esta publicacion?")) {
          await deletePublicacion(id);
          getAllPublicaciones();
        }
      }

    return(
        <>
        <div className="relative flex py-4 items-center">
            <h2 className="absolute left-1/2 transform -translate-x-1/2 text-center">Administrador de publicaciones</h2>
            <div className="ml-auto">
                <ModalReact getAllPublicaciones={getAllPublicaciones}/>
            </div>
        </div>
        <section className='grid md:grid-cols-2 gap-3'>
            {
                publis.map(publi => (
                    <article key={publi.id} className='bg-slate-700 rounded-md p-4'>
                        <div className='flex flex-row justify-between items-center py-2'>
                            <h3>{publi.titulo}</h3>
                            <div className='flex flex-row gap-4'>
                                {/* <button className='bg-blue-600 py-1 px-2 rounded-lg'>Editar</button> */}
                                <button onClick={() => handleDelete(publi.id)} className='bg-red-600 p-1 rounded-lg'>Eliminiar</button>
                            </div>
                        </div>
                        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis veritatis recusandae labore nesciunt voluptatem quidem doloremque ea reprehenderit, maiores fugiat iste fugit a explicabo nulla tempore ratione velit iure iusto distinctio odit blanditiis sequi vero impedit ipsa! Quibusdam officia, assumenda repellendus aliquam provident fugit non beatae incidunt nemo consequatur velit eligendi dignissimos labore ipsa, atque consequuntur ipsum suscipit earum eaque sequi maxime molestias quaerat ullam? Doloremque vero hic cumque nobis illo et ea. Nesciunt at, molestias perferendis repellendus amet sapiente hic voluptatibus explicabo minima aliquam voluptatum odit beatae eos inventore obcaecati laborum est quibusdam? Aliquam eligendi veritatis modi totam soluta incidunt error libero facere nisi mollitia quidem deserunt itaque quis, saepe et vero doloremque! Iste magnam doloremque quam perspiciatis, exercitationem fugit eveniet voluptatem, incidunt eligendi neque aut odit facilis placeat fugiat tenetur? Repellendus, hic delectus quas magni aspernatur, quisquam voluptate est fugiat blanditiis eaque provident, esse rerum similique sequi doloremque sit ab. Mollitia sequi inventore nemo totam veniam vel! Nostrum repellendus error nam dolor velit et tenetur vel expedita animi sequi! Quam, laboriosam a! Est omnis sint velit soluta. Dolorum aspernatur quasi cum odit accusamus ducimus distinctio itaque, perspiciatis recusandae rerum nesciunt modi doloribus mollitia repellendus consequatur impedit laboriosam vel? Vel, officiis? Ipsam, eius minus perferendis illo quas voluptatum accusamus, ipsum quod, dolores molestiae cupiditate ex asperiores libero? Asperiores cum nulla quos praesentium temporibus rerum minus sequi voluptate consequuntur fuga! Nesciunt, vel earum! Laboriosam possimus qui corporis veniam, commodi alias laborum laudantium recusandae sit iusto quo ab magni unde? Itaque aperiam aut hic modi facere sed praesentium inventore velit quo quis suscipit adipisci corporis, porro repellendus deserunt neque recusandae omnis fugit ad necessitatibus voluptates quia. Excepturi, earum dicta nulla quaerat expedita modi optio ab delectus nam eaque voluptates odio maxime dolorem? Sunt, corporis vero. Nam fugiat ipsa perferendis totam dolorum, odio error magnam sit nostrum, qui exercitationem nemo quis provident tempore blanditiis! Dicta possimus ex quam voluptas animi a, minima officia minus iusto autem debitis cum alias aliquam praesentium fuga perferendis nesciunt itaque ipsam ipsa laboriosam maxime! Tempore quia exercitationem modi corrupti numquam officia dolores in mollitia iusto, labore accusamus laudantium? Temporibus eligendi qui saepe sequi odit quia, obcaecati vel eius, iste, nostrum omnis maiores explicabo consequatur dicta. Laboriosam aperiam repellendus vel, magni placeat voluptas id nihil labore explicabo, vero asperiores. Explicabo mollitia quisquam et sapiente animi. Nostrum nisi itaque quo architecto ipsam in eum possimus laudantium deserunt officiis enim iure ex voluptates, quis aliquid obcaecati eos ipsa porro tenetur fugit earum, hic sapiente dolores dolorem. Autem quos delectus nobis, vero quo voluptas accusantium animi facilis et cum error obcaecati mollitia dolorum adipisci iusto voluptatum magni dicta? Quisquam inventore animi voluptate iste fugit voluptas quod enim in vel? Iste a soluta mollitia iusto repellendus vero quo, reprehenderit labore voluptatum dolore, sit inventore impedit consectetur eligendi excepturi accusamus assumenda? Voluptatum enim qui accusantium voluptatem doloribus recusandae vitae quas iusto aut earum soluta laborum, ad autem dolorum officiis ipsa? Rem, vitae expedita enim explicabo laboriosam eligendi rerum, officiis, aut quis officia placeat! Possimus quo ut asperiores vel ipsa in exercitationem quam odit, quaerat, id enim quasi, animi porro quas. Quis beatae laudantium ab molestias, hic earum vitae tempore tenetur sapiente exercitationem est quibusdam praesentium perferendis deserunt voluptate debitis maiores molestiae nihil maxime sequi asperiores iusto? Omnis obcaecati eaque id accusantium iure nemo dignissimos voluptate in? Ullam, odit. Autem, rerum modi necessitatibus voluptates sapiente iure aliquam iusto dignissimos. Nihil asperiores aperiam, autem quas itaque assumenda distinctio cum voluptatem, quibusdam, consectetur voluptatibus perferendis odit odio. Alias quaerat quam sapiente temporibus inventore vitae blanditiis animi saepe doloribus, perspiciatis tempora amet beatae rem eos odio quibusdam cumque fugiat atque corrupti placeat autem dolores soluta quae illum. Assumenda, soluta? Distinctio aperiam reiciendis cumque quia ducimus asperiores non praesentium neque illum natus dolor ipsa veniam doloremque, at aliquam accusantium beatae a. Tenetur magnam, aliquam expedita harum sint neque fugit enim facilis! Molestias corporis ab quae totam reprehenderit! Enim sed architecto vitae quos dignissimos odio asperiores. Molestias nemo ipsa eum soluta cupiditate beatae excepturi odio veniam nihil tempore totam ipsam, ullam ab, doloribus maiores culpa? Sit repudiandae ipsa quis, ad sunt veritatis distinctio debitis, reiciendis voluptatem dolorem adipisci in, fugit nisi cumque nobis cupiditate quas vero neque corrupti quod quo possimus mollitia! Unde quia voluptatibus aut ut aspernatur architecto dolor possimus earum nisi temporibus sunt, voluptatem quod? Aperiam quaerat dolores beatae similique tempore quia deleniti animi, totam deserunt, quis est ipsa. Sint expedita consequuntur itaque tempora sapiente id in ea inventore reprehenderit. Doloribus, eum voluptas minima excepturi laboriosam explicabo fuga magnam. Placeat nam ducimus tempora reiciendis animi. Perspiciatis dignissimos laborum facilis eius, at quasi quod asperiores vel dolorum. Hic, quibusdam. Cupiditate tenetur quidem corporis deleniti enim consectetur ab facilis laboriosam in sapiente accusantium, inventore, repudiandae aliquid minus aliquam. Similique, totam eaque quasi consequatur porro veniam debitis repellat quia omnis quidem facere molestiae iusto eligendi exercitationem assumenda tempore! Ab, quasi, aspernatur amet at accusamus pariatur, rem a incidunt nam odio non deserunt dignissimos! Enim labore obcaecati totam expedita, autem iste ipsa! Id dicta quis at nulla voluptatum, obcaecati autem, dolor quo officia dolorum ullam nam expedita molestias! Dolor consequatur fuga laboriosam molestias dignissimos nobis ea delectus, nam, exercitationem suscipit iure aperiam aliquam itaque corrupti quod, iste enim ducimus mollitia blanditiis tempora. Ratione necessitatibus, temporibus architecto reiciendis optio minima tenetur ea voluptates esse corporis blanditiis unde quam natus perspiciatis officia similique repellendus quisquam consequatur provident magnam neque aliquid ipsam. Laboriosam debitis, pariatur exercitationem aliquam placeat ducimus autem commodi ipsa velit tempore voluptatum soluta repudiandae, cumque vero unde voluptatibus cum architecto rem beatae impedit porro suscipit ad! Nobis incidunt numquam pariatur non nemo corporis quidem iure, corrupti at molestias voluptatum assumenda quos omnis aperiam doloremque. Qui illo, deleniti fugiat laudantium voluptatum ad aliquid at totam nemo vitae, cupiditate harum sunt numquam aspernatur et quis voluptas odit debitis eos veniam ipsum facilis quibusdam id maxime. Fuga, nam. Ipsum, beatae pariatur tempore alias quibusdam asperiores expedita soluta. Nam iure ad odit dolores! Dolorem, porro repellendus accusantium architecto suscipit tempora numquam odio ad provident impedit.</p> */}
                    </article>
                ))
            }
        </section>
        </>
    )
}

export default Publicaciones;