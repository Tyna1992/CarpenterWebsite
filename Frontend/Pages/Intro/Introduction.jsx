import Grid from '@mui/material/Grid';


function Introduction() {
  return (
      <Grid container sx={{paddingTop: "10rem"}}>
          <Grid item xs={8} sx={{backgroundColor: "rgba(216,161,101,0.6)", borderRadius: "8px"}}>
              <h1>Kedves Látogató!</h1>
              <p>
                  Kisgyerek korom óta foglalkozom az asztalossággal, 2020 nyarán pedig létrehoztam kis vállalkozásomat, igyekezve minden megrendelést, segítségkérést kielégíteni, legyen az bútor összeszerelés, javítás, kis ajándék készítés, vagy egy egész konyhabútor gyártása 🙂
                  Foglalkozom tömörfa bútorok, -tárgyak készítésével, valamint a laminált faforgácslapos termékek gyártása sem jelent akadályt!
                  Törekszem a magas minőségű termékek előállítására, mind küllemre, mind szerkezetileg egyaránt!
              </p>
          </Grid>
      </Grid>
  );
}

export default Introduction;