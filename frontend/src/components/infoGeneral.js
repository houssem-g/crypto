import React from 'react'



const InfoGeneral = (params) => {
    
    const styles= {
        rowInfo: {
            display: "flex",
            marginTop: "2vh",
            justifyContent: "space-around",
        },
        columnInfo: {
            marginLeft: "6vh",
        },
        cellInfo: {
            height: "2px",
        }
    }
    // let address = params ? params.address : "notFound"
    
    // const { response, loading, error } = useAxiosToGetHolders({
    //     method: 'get',
    //     url: `infoTrx/?address=${params.walletAddress }`
    // });
    console.log("params : ", params)
    return (         
        <div style={styles.rowInfo}>
            <div>
                <h4 style={styles.cellInfo}>Tokens Available</h4>
                <p>{params.availableSupply}</p>
                <h4 style={styles.cellInfo}>Liquidity</h4>
                <p>10000</p>
                <h4 style={styles.cellInfo}>Rank</h4>
                <p>{params.rank}</p>                   
            </div>

            <div style={styles.columnInfo}>
                <h4 style={styles.cellInfo}>Holders</h4>
                <p>{params.holders}</p>
                <h4 style={styles.cellInfo}>Burn</h4>
                <p>750</p>
                
            </div>

        </div>
    );
}
export default InfoGeneral;