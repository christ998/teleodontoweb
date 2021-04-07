/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
 
  const { nodes, materials } = useGLTF('/mesh/fantoma.gltf')

  return (
    <group ref={group} {...props}>
      <mesh
        material={materials.rostro}
        geometry={nodes.rostro.geometry}
        position={[0, 0.060551613569259644, 0.004202398471534252]}
        rotation={[1.6643825434326098, 0, 0]}
      />
      <mesh
        material={materials.mejillas}
        geometry={nodes.mejillas.geometry}
        position={[-0.000080880970926955, 0.011259406805038452, 0.029608502984046936]}
        rotation={[0.5004097689342194, -0.001791890864640021, 1.566577833093736]}
        scale={[0.02752080000936985, 0.02752080000936985, 0.02752080000936985]}
      />
      <mesh
        material={materials.encia}
        geometry={nodes.reb_alv_inf_papilas.geometry}
        position={[-0.000799172383267432, -0.009652681648731232, 0.03410725295543671]}
        rotation={[1.8928228644193699, 0, 0]}
        scale={[0.2582273781299591, 0.2582273781299591, 0.2582273781299591]}
      />
      <mesh
        material={materials.encia}
        geometry={nodes.reb_alv_sup_papilas.geometry}
        position={[0.000345383945386857, 0.025681160390377045, 0.050578609108924866]}
        rotation={[1.7410711657057512, 0, 0]}
        scale={[0.27773573994636536, 0.35650089383125305, 0.2803818881511688]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['11'].geometry}
        position={[-0.003994331229478121, 0.010893426835536957, 0.0768766775727272]}
        rotation={[-3.0071630492210586, 0.002414291791063278, 0.00906167556339743]}
        scale={[0.011204231530427933, 0.011204230599105358, 0.011204234324395657]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['12'].geometry}
        position={[-0.010505766607820988, 0.010835833847522736, 0.07499976456165314]}
        rotation={[0.171762486364649, 0.1816762143486141, -0.13324115163286038]}
        scale={[0.011716236360371113, 0.01171624194830656, 0.011716240085661411]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['13'].geometry}
        position={[-0.014876807108521461, 0.011480335146188736, 0.07086978107690811]}
        rotation={[-3.062080850076776, -0.15785569096305105, -0.14210624321810134]}
        scale={[0.010929856449365616, 0.01092985924333334, 0.010929860174655914]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['14'].geometry}
        position={[-0.017843618988990784, 0.011939216405153275, 0.06576838344335556]}
        rotation={[-2.9558816327733015, -0.8441928409338672, 0.013479365597832632]}
        scale={[0.002824323019012809, 0.002824323251843452, 0.002824322320520878]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['15'].geometry}
        position={[-0.02155187539756298, 0.013107303529977798, 0.06107416749000549]}
        rotation={[-2.8443970297594796, 0.006032054899517629, -0.17005640180211887]}
        scale={[0.01092985738068819, 0.010929862037301064, 0.010929861105978489]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['16'].geometry}
        position={[-0.023491911590099335, 0.015478692948818207, 0.05415882170200348]}
        rotation={[0.3052715640704756, 0.1514005386779953, 0.00881980998714958]}
        scale={[0.01092985738068819, 0.010929858312010765, 0.010929860174655914]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['17'].geometry}
        position={[-0.026171064004302025, 0.01750633493065834, 0.04525551572442055]}
        rotation={[0.2813074396516134, -0.016168546846929262, -0.07560743757460588]}
        scale={[0.012300357222557068, 0.01230035349726677, 0.012300355359911919]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['18'].geometry}
        position={[-0.02526138536632061, 0.021021351218223572, 0.03662993013858795]}
        rotation={[-2.943025051433312, -0.007127610584466993, 0.02467918772471263]}
        scale={[0.013175329193472862, 0.01317533291876316, 0.013175327330827713]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['21'].geometry}
        position={[0.003753884928300977, 0.010954301804304123, 0.07641656696796417]}
        rotation={[-3.0071630492210586, 0.002414291791063278, 0.00906167556339743]}
        scale={[0.011204231530427933, 0.011204230599105358, 0.011204234324395657]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['22'].geometry}
        position={[0.010648688301444054, 0.010981399565935135, 0.07463881373405457]}
        rotation={[0.13500599460070634, 0.2000201263038056, -0.0927054542745681]}
        scale={[0.011716235429048538, 0.01171624194830656, 0.011716238223016262]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['23'].geometry}
        position={[0.015928350389003754, 0.01137053593993187, 0.07062441855669022]}
        rotation={[-3.0521439426030064, -0.1690544039001924, -0.08175280710741449]}
        scale={[0.010929858312010765, 0.010929865762591362, 0.010929860174655914]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['24'].geometry}
        position={[0.019785869866609573, 0.01190902292728424, 0.06554607301950455]}
        rotation={[-2.950575636043429, -1.0436269669490519, 0.017798599567659286]}
        scale={[0.002779005095362663, 0.002779004164040089, 0.002779003232717514]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['25'].geometry}
        position={[0.02267684042453766, 0.013182241469621658, 0.06102679669857025]}
        rotation={[-2.776704751752609, -0.06559611469301187, -0.12021528960859659]}
        scale={[0.01092985738068819, 0.010929862968623638, 0.010929855518043041]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['26'].geometry}
        position={[0.024468332529067993, 0.015394609421491623, 0.05374370142817497]}
        rotation={[0.2906544469516583, 0.07113730053424178, 0.15888895506087442]}
        scale={[0.01092985738068819, 0.010929862968623638, 0.010929860174655914]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['26RR'].geometry}
        position={[0.023969290778040886, 0.0202372744679451, 0.05526266247034073]}
        rotation={[0.2906544469516583, 0.07113730053424178, 0.15888895506087442]}
        scale={[0.01092985738068819, 0.010929862968623638, 0.010929860174655914]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['27'].geometry}
        position={[0.02626725099980831, 0.017643023282289505, 0.04441720247268677]}
        rotation={[0.19380006692502136, -0.002947695711077249, -0.0879387682806948]}
        scale={[0.01135429460555315, 0.011354304850101471, 0.011354304850101471]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['28'].geometry}
        position={[0.02643958292901516, 0.020649753510951996, 0.03665465861558914]}
        rotation={[-2.974768386859708, 0.001369862461211565, -0.0982401554532288]}
        scale={[0.012485920451581478, 0.012485918588936329, 0.012485921382904053]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['31'].geometry}
        position={[0.002447221195325255, -0.01661025546491146, 0.058229316025972366]}
        rotation={[-2.8271500671279814, 0.000549675068400726, 0.06565073128657505]}
        scale={[0.01029480155557394, 0.010294806212186813, 0.010294806212186813]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['32'].geometry}
        position={[0.006317142862826586, -0.016367049887776375, 0.05716734007000923]}
        rotation={[-2.8228991376839048, -0.06116679668967896, 0.06881522208664206]}
        scale={[0.010294799692928791, 0.010294809937477112, 0.010294808074831963]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['33'].geometry}
        position={[0.010101011022925377, -0.01668919064104557, 0.05389733612537384]}
        rotation={[-2.797139306653957, -0.007124261413611526, 0.025157747142358355]}
        scale={[0.010294797830283642, 0.010294809937477112, 0.010294807143509388]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['34'].geometry}
        position={[0.013997945934534073, -0.013729654252529144, 0.05071316286921501]}
        rotation={[0.45716836781197906, -0.01762049218159059, -0.041652248302266805]}
        scale={[0.01029480155557394, 0.010294802486896515, 0.010294807143509388]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['35'].geometry}
        position={[0.017136117443442345, -0.01045650988817215, 0.045368023216724396]}
        rotation={[0.2933683747535186, 0.022557511597531953, -0.08307932325151915]}
        scale={[0.010693180374801159, 0.010693184100091457, 0.010693182237446308]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['36'].geometry}
        position={[0.020051749423146248, -0.005422312766313553, 0.03839058801531792]}
        rotation={[-2.8271498885702164, 1.30802818576e-7, 0.07269006711623194]}
        scale={[0.010294799692928791, 0.010294802486896515, 0.01029480341821909]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['37'].geometry}
        position={[0.02365131676197052, -0.000271812081336975, 0.02984842099249363]}
        rotation={[-2.6623748135544107, 0.10443862010714858, -0.04716927697315141]}
        scale={[0.01029480155557394, 0.01029480155557394, 0.01029480341821909]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['38'].geometry}
        position={[0.027019735425710678, 0.004371806979179382, 0.02255745604634285]}
        rotation={[0.26268483948667154, 0, 0]}
        scale={[0.01029480155557394, 0.010294805280864239, 0.010294805280864239]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['41'].geometry}
        position={[-0.002421815879642963, -0.016624249517917633, 0.05833512544631958]}
        rotation={[-2.8271500671279814, 0.000549675068400726, 0.06565073128657505]}
        scale={[0.01029480155557394, 0.010294806212186813, 0.010294806212186813]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['42'].geometry}
        position={[-0.006706338375806808, -0.0164008978754282, 0.05740179121494293]}
        rotation={[-2.8228991376839048, -0.06116679668967896, 0.06881522208664206]}
        scale={[0.010294799692928791, 0.010294809937477112, 0.010294808074831963]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['43'].geometry}
        position={[-0.011016355827450752, -0.015699779614806175, 0.05451933294534683]}
        rotation={[-2.7287202043792913, 0.009174057244313387, -0.0668152686864502]}
        scale={[0.010294804349541664, 0.010294805280864239, 0.010294805280864239]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['44'].geometry}
        position={[-0.015221851877868176, -0.01249707117676735, 0.05043242126703262]}
        rotation={[0.45716836781197906, -0.01762049218159059, -0.041652248302266805]}
        scale={[0.01029480155557394, 0.010294802486896515, 0.010294807143509388]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['45'].geometry}
        position={[-0.018012922257184982, -0.010478656738996506, 0.04450414702296257]}
        rotation={[0.3811290984373485, 0.015172930194638928, -0.08473591065919076]}
        scale={[0.011009068228304386, 0.01100907102227211, 0.011009070090949535]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['46'].geometry}
        position={[-0.021531518548727036, -0.005402691662311554, 0.037969499826431274]}
        rotation={[-2.828613097437125, 0.024724787440708322, -0.06593596484387185]}
        scale={[0.010294797830283642, 0.010294800624251366, 0.010294805280864239]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['47'].geometry}
        position={[-0.025020143017172813, -0.000635713338851929, 0.02924846112728119]}
        rotation={[-2.578413478369357, -0.2753266534111244, 0.11464106521623652]}
        scale={[0.010294805280864239, 0.010294805280864239, 0.010294804349541664]}
      />
      <mesh
        material={materials.esmalte}
        geometry={nodes['48'].geometry}
        position={[-0.027460336685180664, 0.005100630223751068, 0.023030057549476624]}
        rotation={[0.38706628116821845, 0.08692140128048739, 0.13731486619731875]}
        scale={[0.01029480341821909, 0.01029480341821909, 0.010294806212186813]}
      />
      <mesh
        material={materials.lengua_normal}
        geometry={nodes.lengua_normal.geometry}
        position={[-0.000008139821147779, -0.002079464495182037, 0.028254840523004532]}
        rotation={[0.07953233935449347, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/mesh/fantoma.gltf')
