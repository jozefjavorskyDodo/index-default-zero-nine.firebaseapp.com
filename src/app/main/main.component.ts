

import { Component } from "@angular/core";


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {


  subs_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var sub_00: any = document.querySelectorAll(
        <string>(
          String(".sub00")
        ));
      var sub_01: any = document.querySelectorAll(
        <string>(
          String(".sub01")
        ));
      var sub_02: any = document.querySelectorAll(
        <string>(
          String(".sub02")
        ));
      var sub_10: any = document.querySelectorAll(
        <string>(
          String(".sub10")
        ));
      var sub_11: any = document.querySelectorAll(
        <string>(
          String(".sub11")
        ));
      var sub_12: any = document.querySelectorAll(
        <string>(
          String(".sub12")
        ));
      var sub_20: any = document.querySelectorAll(
        <string>(
          String(".sub20")
        ));
      var sub_21: any = document.querySelectorAll(
        <string>(
          String(".sub21")
        ));
      var sub_22: any = document.querySelectorAll(
        <string>(
          String(".sub22")
        ));
      [...sub_00, ...sub_11, ...sub_22].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 50, 100)")
        );
      });
      [...sub_01, ...sub_12, ...sub_20].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...sub_02, ...sub_10, ...sub_21].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(100, 100, 244)")
        );
      });
    } catch (err_2) {
      if (err_2) {
        console.clear();
        console.log(err_2);
      };
    };
  };


  rows_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var y_0: any = document.querySelectorAll(
        <string>(
          String(".y0")
        ));
      var y_1: any = document.querySelectorAll(
        <string>(
          String(".y1")
        ));
      var y_2: any = document.querySelectorAll(
        <string>(
          String(".y2")
        ));
      var y_3: any = document.querySelectorAll(
        <string>(
          String(".y3")
        ));
      var y_4: any = document.querySelectorAll(
        <string>(
          String(".y4")
        ));
      var y_5: any = document.querySelectorAll(
        <string>(
          String(".y5")
        ));
      var y_6: any = document.querySelectorAll(
        <string>(
          String(".y6")
        ));
      var y_7: any = document.querySelectorAll(
        <string>(
          String(".y7")
        ));
      var y_8: any = document.querySelectorAll(
        <string>(
          String(".y8")
        ));
      [...y_0, ...y_3, ...y_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 50, 100)")
        );
      });
      [...y_1, ...y_4, ...y_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...y_2, ...y_5, ...y_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(100, 100, 244)")
        );
      });
    } catch (err_3) {
      if (err_3) {
        console.clear();
        console.log(err_3);
      };
    };
  };


  cols_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var x_0: any = document.querySelectorAll(
        <string>(
          String(".x0")
        ));
      var x_1: any = document.querySelectorAll(
        <string>(
          String(".x1")
        ));
      var x_2: any = document.querySelectorAll(
        <string>(
          String(".x2")
        ));
      var x_3: any = document.querySelectorAll(
        <string>(
          String(".x3")
        ));
      var x_4: any = document.querySelectorAll(
        <string>(
          String(".x4")
        ));
      var x_5: any = document.querySelectorAll(
        <string>(
          String(".x5")
        ));
      var x_6: any = document.querySelectorAll(
        <string>(
          String(".x6")
        ));
      var x_7: any = document.querySelectorAll(
        <string>(
          String(".x7")
        ));
      var x_8: any = document.querySelectorAll(
        <string>(
          String(".x8")
        ));
      [...x_0, ...x_3, ...x_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 0, 0)")
        );
      });
      [...x_1, ...x_4, ...x_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(0, 244, 0)")
        );
      });
      [...x_2, ...x_5, ...x_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(100, 100, 244)")
        );
      });
    } catch (err_4) {
      if (err_4) {
        console.clear();
        console.log(err_4);
      };
    };

  };


  null_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var __tds___: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      [...__tds___].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(128, 128, 128)")
        );
      });
    } catch (err_5) {
      if (err_5) {
        console.clear();
        console.log(err_5);
      };
    };
  };


  i_fT_tF_o(): void {
    <string>(
      String("use strict")
    );
    try {
      var ____tds_: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      var ___0tr: number[] = [];
      [...____tds_].forEach((cubicle) => {
        cubicle.innerHTML = <string>(
          String('0')
        );
        cubicle.style.color = <string>(
          String("rgb(0, 0, 0)")
        );
      });
      while (
        <number>(
          Number(___0tr.length)
        )
        <
        <number>(
          Number(9)
        )
      ) {
        var pos_prob_new_int_val: number = <number>(
          Number(Math.floor(Math.random()
            * <number>(
              Number(9)
            ))
            + <number>(
              Number(1)
            )));
        if (
          <boolean>(
            Boolean(___0tr.includes(
              <number>(
                Number(pos_prob_new_int_val)
              ))))
          ===
          <boolean>(
            Boolean(false)
          )
        ) {
          ___0tr.push(
            <number>(
              Number(pos_prob_new_int_val)
            ));
        };
      };
      for (
        var indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(8)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        ____tds_[
          <number>(
            Number(indx_iter)
          )].innerHTML = <string>(
            String(___0tr[
              <number>(
                Number(indx_iter)
              )]));
        ____tds_[
          <number>(
            Number(indx_iter)
          )
          + <number>(
            Number(12)
          )].innerHTML = <string>(
            String(___0tr[
              <number>(
                Number(indx_iter)
              )]));
      };
      ____tds_[
        <number>(
          Number(9)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(6)
            )]));
      ____tds_[
        <number>(
          Number(10)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(7)
            )]));
      ____tds_[
        <number>(
          Number(11)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(8)
            )]));
      ____tds_[
        <number>(
          Number(18)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(3)
            )]));
      ____tds_[
        <number>(
          Number(19)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(4)
            )]));
      ____tds_[
        <number>(
          Number(20)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(5)
            )]));
      ____tds_[
        <number>(
          Number(21)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(6)
            )]));
      ____tds_[
        <number>(
          Number(22)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(7)
            )]));
      ____tds_[
        <number>(
          Number(23)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(8)
            )]));
      ____tds_[
        <number>(
          Number(24)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(0)
            )]));
      ____tds_[
        <number>(
          Number(25)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(1)
            )]));
      ____tds_[
        <number>(
          Number(26)
        )].innerHTML = <string>(
          String(___0tr[
            <number>(
              Number(2)
            )]));
      for (
        var indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(26)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        ____tds_[
          <number>(
            Number(indx_iter)
          )].style.color = <string>(
            String("rgb(244, 244, 244)")
          );
      };
      {
        for (
          var __10ts_repe: number = <number>(
            Number(1)
          );
          __10ts_repe <= <number>(
            Number(10)
          );
          __10ts_repe += <number>(
            Number(1)
          )
        ) {
          this.fT_fT();
        };
        {
          var cubicles_: any = document.querySelectorAll(
            <string>(
              String("td")
            ));
          var null_flag: boolean = <boolean>(
            Boolean(false)
          );
          for (
            var yindx_iter: number = <number>(
              Number(0)
            );
            yindx_iter <= <number>(
              Number(80)
            );
            yindx_iter += <number>(
              Number(1)
            )
          ) {
            if (
              <string>(
                String(cubicles_[
                  <number>(
                    Number(yindx_iter)
                  )].innerHTML))
              ===
              <string>(
                String('0')
              )
            ) {
              null_flag = <boolean>(
                Boolean(true)
              );
            };
          };
          if (
            <boolean>(
              Boolean(null_flag)
            )
            ===
            <boolean>(
              Boolean(true)
            )
          ) {
            this.i_fT_tF_o();
          } else {
            var _cells: any = document.querySelectorAll(
              <string>(
                String("td")
              ));
            var pseudo_random_indexes: number[] = [];
            var generate_bttn: any = document.querySelector(
              <string>(
                String("#generate-bttn")
              ));
            var solve_bttn: any = document.querySelector(
              <string>(
                String("#solve-bttn")
              ));
            while (
              <number>(
                Number(pseudo_random_indexes.length)
              )
              <
              <number>(
                Number(40)
              )
            ) {
              var pos_prob_new_int_indx: number = <number>(
                Number(Math.floor(Math.random()
                  * <number>(
                    Number(81)
                  )))
              );
              if (
                <boolean>(
                  Boolean(pseudo_random_indexes.includes(
                    <number>(
                      Number(pos_prob_new_int_indx)
                    ))))
                ===
                <boolean>(
                  Boolean(false)
                )
              ) {
                pseudo_random_indexes.push(
                  <number>(
                    Number(pos_prob_new_int_indx)
                  ));
              };
            };
            for (
              var _iter___indx: number = <number>(
                Number(0)
              );
              _iter___indx <= <number>(
                Number(39)
              );
              _iter___indx += <number>(
                Number(1)
              )
            ) {
              _cells[
                <number>(
                  Number(
                    pseudo_random_indexes[
                    <number>(
                      Number(_iter___indx)
                    )]))].style.color = <string>(
                      String("rgb(0, 0, 0)")
                    );
            };
            generate_bttn.style.visibility = <string>(
              String("hidden")
            );
            solve_bttn.style.visibility = <string>(
              String("visible")
            );
          };
        };
      };
    } catch (err_6) {
      if (err_6) {
        console.clear();
        console.log(err_6);
      };
    };
  };



  fT_fT(): void {
    <string>(
      String("use strict")
    );
    try {
      var clls: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      for (
        var __indx_iter: number = <number>(
          Number(27)
        );
        __indx_iter <= <number>(
          Number(80)
        );
        __indx_iter += <number>(
          Number(1)
        )
      ) {
        var its_sub: any = document.querySelectorAll(
          <string>(
            String('.')
            +
            <string>(
              String(clls[
                <number>(
                  Number(__indx_iter))].getAttribute(
                    <string>(
                      String("class")
                    ))).split(
                      <string>(
                        String(' ')
                      ))[
              <number>(
                Number(0)
              )]
            )
          )
        );
        var its___y: any = document.querySelectorAll(
          <string>(
            String('.')
            +
            <string>(
              String(clls[
                <number>(
                  Number(__indx_iter))].getAttribute(
                    <string>(
                      String("class")
                    ))).split(
                      <string>(
                        String(' ')
                      ))[
              <number>(
                Number(1)
              )]
            )
          )
        );
        var its___x: any = document.querySelectorAll(
          <string>(
            String('.')
            +
            <string>(
              String(clls[
                <number>(
                  Number(__indx_iter))].getAttribute(
                    <string>(
                      String("class")
                    ))).split(
                      <string>(
                        String(' ')
                      ))[
              <number>(
                Number(2)
              )]
            )
          )
        );
        var sub_vals: string[] | any[] | number[] = [];
        var y___vals: string[] | any[] | number[] = [];
        var x___vals: string[] | any[] | number[] = [];
        for (
          var iter_indx: number = <number>(
            Number(0)
          );
          iter_indx <= <number>(
            Number(8)
          );
          iter_indx += <number>(
            Number(1)
          )
        ) {
          sub_vals.push(
            <number>(
              Number(its_sub[
                <number>(
                  Number(iter_indx)
                )].innerHTML)));
          y___vals.push(
            <number>(
              Number(its___y[
                <number>(
                  Number(iter_indx)
                )].innerHTML)));
          x___vals.push(
            <number>(
              Number(its___x[
                <number>(
                  Number(iter_indx)
                )].innerHTML)));
        };
        for (
          var pos_new_int_val: number = <number>(
            Number(1)
          );
          pos_new_int_val <= <number>(
            Number(9)
          );
          pos_new_int_val += <number>(
            Number(1)
          )
        ) {
          if (
            (
              <boolean>(
                Boolean(sub_vals.includes(
                  <number>(
                    Number(pos_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
            &&
            (
              <boolean>(
                Boolean(y___vals.includes(
                  <number>(
                    Number(pos_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
            &&
            (
              <boolean>(
                Boolean(x___vals.includes(
                  <number>(
                    Number(pos_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
          ) {
            clls[
              <number>(
                Number(__indx_iter)
              )].innerHTML = <string>(
                String(
                  <number>(
                    Number(pos_new_int_val)
                  )));
            clls[
              <number>(
                Number(__indx_iter)
              )].style.color = <string>(
                String("rgb(244, 244, 244)")
              );
          };
        };
        if (
          <string>(
            String(clls[
              <number>(
                Number(__indx_iter)
              )].innerHTML))
          ===
          <string>(
            String('0')
          )
        ) {
          break;
        };
      };
    } catch (err_7) {
      if (err_7) {
        console.clear();
        console.log(err_7);
      };
    };
  };



  rerender_UI_state(): void {
    {
      var generate___bttn: any = document.querySelector(
        <string>(String("#generate-bttn")
        ));
      var solve______bttn: any = document.querySelector(
        <string>(String("#solve-bttn")
        ));
      var ___tds_________: any = document.querySelectorAll(
        <string>(String("td")
        ));
      {
        [...___tds_________].forEach((val_) => {
          val_.style.color = <string>(
            String("rgb(244, 244, 244)")
          );
        });
        generate___bttn.style.visibility = <string>(
          String("visible")
        );
        solve______bttn.style.visibility = <string>(
          String("hidden")
        );
      };
    };
  };

};
