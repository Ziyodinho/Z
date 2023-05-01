import React, { useLayoutEffect } from "react";
import {useWindowDimensions, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

  const htmlContent = `<style>*{font-size: 30px;}</style><div><br><dl><dd><table style="width: 95%; margin: 10 auto;" cellPadding="7" cellSpacing="0"><colgroup><col width="23"/><col width="253"/><col width="106"/><col width="146"/></colgroup><tbody><tr valign="top"><td colSpan="2" width="290" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">Insektitsidlar</p></td><td colSpan="2" width="266" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">Sarflash me’yori, l/ga</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p   align="center" style="orphans:0;widows:0;text-indent:0cm;"><br/></p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p   align="center" style="orphans:0;widows:0;text-indent:0cm;"><br/></p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">l/ga</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">Kontsentratsiya, %</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">1.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Ovipron 2000,80% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">10-15,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,0-1,5</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">2.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Preparat – <span >RR-1e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">10-15</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,0-1,5</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">3.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Bioslip BV e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">2,0-3,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,2-0,3</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">4.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Bioslip BV n.kuk</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">2,0-3,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,2-0,3</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">5.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Imitrin, 20 sus.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,15-0,4</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,015-0,04</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">6.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Tanrek, 20 % e.m.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,2-0,3</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,02-0,03</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">7.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Bagira, 25% s.e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,3</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,03</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">8.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Bi-58(yangi) 40% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">2,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,2</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">9.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Dalmetoat, 40% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">2,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,2</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">10.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Nurell-D, 55% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,5</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,1</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">11.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Siperfos, 55% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,5</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,1</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">12.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Atilla,5% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,4-0,8</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,04-0,08</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">13.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Esfan-alfa,5% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,1</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">14.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">TSiyermetrin, 25% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,32</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,032</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">15.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Detsis, 2,5% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,5-1,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,05-0,1</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">16.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Karate,5% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,4-0,8</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,04-0,08</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">17.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Karbofos,50% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">3,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,3</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">18.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Fufanon 57% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,0-3,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,1-0,3</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">19.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Zolon 35% e.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">2,0-4,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,2-0,4</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">20.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Lepidotsid BF 3000 yeA/mg</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,1</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">21.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Fungiosporin BF 1500 yeA/mg</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">3,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,3</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">22.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Bayleton 25% n.kuk.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,75</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,075</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">23.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Zeroks k.s.e</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,0-2,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,1-0,2</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">24.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Alto Super 33% em.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,17-0,2</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,017-0,02</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">25.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Altis Duo, 32,5 % sus.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,375-0,5</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,0375-0,05</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">26.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Topsin-M, 70 % n.kuk.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">1,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,1</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">27.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Miss xlorokisi, 85 % n.kuk.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">4,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,4</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">28.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;"><span >Sporagin s.e.k. 1500 yeA/g</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">4,0-6,0</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,4-0,6</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">29.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Skort, 25 % em.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,5</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,05</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">30.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Tetris, 25% sus.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,6-0,8</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,06-0,08</p></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr valign="top"><td width="23" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">31.</p></td><td width="253" style="border:1px solid #000000;padding:0cm 0.19cm"><p  style="orphans:0;widows:0;text-indent:0cm;">Amistar top, 32,5% sus.k.</p></td><td width="106" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,5-0,6</p></td><td width="146" style="border:1px solid #000000;padding:0cm 0.19cm"><p  align="center" style="orphans:0;widows:0;text-indent:0cm;">0,06-0,06</p></td></tr></tbody></table></dd></dl><p  style="line-height:100%;orphans:0;widows:0;text-indent:1.25cm;margin:20px;"><b>Izoh: </b>Atrof muhitni sofligini saqlash maqsadida ruxsat qilingan maydonlarda daraxtlarga pestitsidlar qo‘llash mumkin. </p><p></div>`;  
const PesticidesList = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Pestitsidlar ro‘yxati",
      // Здесь вы можете настроить другие параметры панели сверху, например, цвет фона или кнопки
    });
  }, [navigation]);
  const windowWidth = useWindowDimensions().width;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
  }); 

  return (
    <WebView     source={{ html: htmlContent }} 
    style={styles.container} 
    contentWidth={windowWidth} 
  />
  );
};

export default PesticidesList;
