import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../../../app/constants";
import { fetchAllOrdersAsync, selectOrders, selectTotalOrders, updateOrderAsync } from "../../order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { EyeIcon, PencilIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import Pagination from "../../../common/Pagination";

function AdminOrders() {

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});

  const handlePage = (page) => {
    setPage(page);
  };

  const handleSort = (sortOptions) => {
    const sort = { _sort: sortOptions.sort, _order: sortOptions.order };
    setSort(sort);
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ sort, pagination }));
  }, [dispatch, page, sort]);

  const handleEdit = (item)=>{
    setEditableOrderId(item.id);
  }

  const handleUpdate = (e, order)=>{
    const updatedOrder = {...order, status : e.target.value}
    dispatch(updateOrderAsync(updatedOrder))
    setEditableOrderId(-1);
  }

  const chooseColor = (status)=>{
    switch(status)
    {
        case 'pending':
          return `bg-yellow-200 text-yellow-600`;
        case 'dispatch':
          return `bg-purple-200 text-purple-600`;
        case 'canceled':
          return `bg-red-200 text-red-600`;
        default:
          return `bg-green-200 text-green-600`;
    }
  }

  const handleShow = ()=>{
    console.log("handle show");
  }


  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left hover:cursor-pointer" onClick={e=>handleSort({sort:'id', order: sort?._order==='asc'?'desc':'asc'})}>
                    Order Number 
                    {sort._sort==='id' && (sort._order==='asc'?<ArrowUpIcon className="w-4 h-4 inline"></ArrowUpIcon>:<ArrowDownIcon className="w-4 h-4 inline"></ArrowDownIcon>)}
                  </th>
                  <th className="py-3 px-6 text-left">Items</th>
                  <th className="py-3 px-6 text-left hover:cursor-pointer" onClick={e=>handleSort({sort:'totalAmount', order: sort?._order==='asc'?'desc':'asc'})}>
                    Total Amount
                    {sort._sort==='totalAmount' && (sort._order==='asc'?<ArrowUpIcon className="w-4 h-4 inline"></ArrowUpIcon>:<ArrowDownIcon className="w-4 h-4 inline"></ArrowDownIcon>)}
                  </th>
                  <th className="py-3 px-6 text-center">Shipping Address</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">

                {
                  orders.map(order=>
                  <tr className="border-b border-gray-200 hover:bg-gray-100">

                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">{order.id}</span>
                    </div>
                  </td>

                  <td className="py-3 px-6 text-left">
                    {order.items.map(item=>
                      <div className="flex items-center mb-2">
                        <div className="mr-2">
                          <img src={item.thumbnail} alt="item_img" className="w-6 h-6 rounded-full"></img>
                        </div>
                        <span className="text-black">{item.title} - {item.quantity}</span>
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-6 text-center">
                    <div className="flex items-center justify-center">
                      $ {order.totalAmount}
                    </div>
                  </td>

                  <td className="py-3 px-6 text-center">
                  <div className="flex items-center justify-center">
                      <strong>{order.selectedAddress.name}</strong>
                    </div>
                    <div className="flex items-center justify-center">
                      {order.selectedAddress.street}, 
                    </div>
                    <div className="flex items-center justify-center">
                    {order.selectedAddress.city}, {order.selectedAddress.state}
                    </div>
                    <div className="flex items-center justify-center">
                      {order.selectedAddress.pinCode}
                    </div>
                  </td>

                  <td className="py-3 px-6 text-center">
                    {
                      editableOrderId===order.id ?
                      <select onChange={e => handleUpdate(e,order)}>
                      <option value="pending">Pending</option>
                      <option value="dispatch">Dispatch</option>
                      <option value="canceled">Canceled</option>
                      <option value="delivered">Delivered</option>
                    </select>
                          :
                        <span className={` ${chooseColor(order.status)} py-1 px-3 rounded-full text-s`}>
                        {order.status}
                      </span>
                    }
                  </td>

                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <EyeIcon className="w-6 h-6 hover:cursor-pointer" onClick={e=>handleShow(order)}></EyeIcon>
                      </div>
                      <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <PencilIcon className="w-6 h-6 hover:cursor-pointer" onClick={e=>handleEdit(order)}></PencilIcon>
                      </div>
                    </div>
                  </td>

                </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <Pagination
              page={page}
              setPage={setPage}
              handlePage={handlePage}
              totalItems={totalOrders}
            ></Pagination>
          </div>
    </div>
  );
}

export default AdminOrders;
