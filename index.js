let movie=prompt("enter which type of movie: ").toLowerCase()
    switch(movie){
       case "action":
      seat=prompt("select the seat (standard or vip):").toLowerCase()
        switch(seat){
            case "standard":
                console.log("stadard seat cost 10rs ");
                break;
            case "vip":
                console.log("vip seat cost 20rs ");
                break;
                default: console.log("not available")
        }
        break;
    case "comedy":
       seat=prompt("select the seat (standard or vip):").toLowerCase()
            switch(seat){
                case "standard":
                console.log(" stadard seat cost 8rs ");
                break;
                case "vip":
                console.log(" vip seat cost 15rs ");
                break;
                default: console.log("not available")
            }
            break;
        case "drama":
        seat=prompt("select the seat (standard or vip):").toLowerCase()
             switch(seat){
                case "standard":
                console.log("stadard seat cost 6rs" );
                break;
                case "vip":
                console.log("vip seat cost 1rs ");
                break;
                default: console.log("not available")
            }
            break;
               default: console.log("not available")
}



 let category=prompt("select category: ").toLowerCase()
     switch(category){
        case "electronics":
            product=prompt("select product: ").toLowerCase()
            switch(product){
                case "mobile":
                    console.log("discount 5%");
                    break;
                 case "laptop": 
                     console.log("discount 10%");
                     break;
                default:console.log("not available")
            }
            break;
            
             case "clothing":
            product=prompt("select product: ").toLowerCase()
            switch(product){
                case "men":
                    console.log("discount 15%");
                    break;
                 case "womwn": 
                     console.log("discount 20%");
                     break;
                default:console.log("not available")
            }
            break;
            
             case "grocery":
            product=prompt("select product: ").toLowerCase()
            switch(product){
                case "fruits":
                    console.log("discount 5%");
                    break;
                 case "vegetables": 
                     console.log("discount 10%");
                     break;
                default:console.log("not available")
            }
            break;
            default:console.log("select proper category")
    }


    const transp=prompt(" select transport: ").toLowerCase()
    switch(transp){
        case "flight":
            category=prompt("enter class or category: ")
            switch(category){
                case "economy":
                    console.log("confirm your booking in economy category ");
                    break;
                case "business":
                    console.log("confirm your booking in business category")
                    break;
                default: console.log("select available class ")
            }
            break;
        case "train":
          category=prompt("enter class : ").toLowerCase()
            switch(category){
                case "sleeper" :
                    console.log("confirm your booking in sleeper class");
                    break;
                case "acclass":
                    console.log("confirm your booking in ac class")
                    break;
                default: console.log("select available class ")
            }
            break;
        case "bus":
         category=prompt("enter class or category: ").toLowerCase()
            switch(category){
                case "standard":
                    console.log("confirm your booking in standard class");
                    break;
                case "luxury":
                    console.log("confirm your booking in luxary class");
                    break;
                default: console.log("select available class ");
            }
            break;
        default:  console.log(" transport not available")
    }