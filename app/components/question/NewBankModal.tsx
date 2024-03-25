// import { useEffect, useRef } from "react"

// type Props = {
//     visible: Boolean,
//     onClose: Function
// }

// export default function NewBankModal({ visible, onClose }: Props) {

//     const refModal = useRef(null)

//     useEffect(() => {
//         if (!refModal.current) {
//             return;
//         } else {
//             visible ? refModal.current.showModal() : refModal.current.close();
//         }
//     }, [visible]);


//     return (
//         <dialog ref={refModal} id="my_modal_1" className="modal" onClose={onClose}>
//             <div className="modal-box">
//                 <h3 className="font-bold text-lg">Hello!</h3>
//                 <p className="py-4">Press ESC key or click the button below to close</p>
//                 <div className="modal-action">
//                     <button className="btn" onClose={onClose}>Close</button>
//                 </div>
//             </div>
//         </dialog >
//     )
// }