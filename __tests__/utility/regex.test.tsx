/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { RegexEmailUtil, RegexMobileUtil } from '@/utility/regex';


describe('Home', () => {
  it('component:regex tests', () => {
    

    expect(RegexEmailUtil('mohammad.jaf@gmail.com')).toBeTruthy();
    expect(RegexEmailUtil('mohammad.jaf@yahoo.com')).toBeTruthy();
    expect(RegexEmailUtil('mohammad.jaf@bing.com')).toBeTruthy();
    expect(RegexEmailUtil('mohammad.jaf@sdfs.com')).toBeTruthy();
    
    expect(RegexEmailUtil('mohammad.jafsdfs.com')).toBeFalsy();
    expect(RegexEmailUtil('moham324535dfs.com')).toBeFalsy();
    expect(RegexEmailUtil('sd@.com')).toBeFalsy();
    expect(RegexEmailUtil('@sdf.com')).toBeFalsy();



    

    expect(RegexMobileUtil('09148980692')).toBeTruthy();
    expect(RegexMobileUtil('09010409293')).toBeTruthy();
    expect(RegexMobileUtil('09907294632')).toBeTruthy();
    expect(RegexMobileUtil('09147576785')).toBeTruthy();
     

    let el=RegexMobileUtil('091489806926');
    expect(el).toBe(false);
    expect(RegexMobileUtil('0914898069')).toBeFalsy(); 
    expect(RegexMobileUtil('099015743165')).toBeFalsy();
    expect(RegexMobileUtil('9148980692')).toBeFalsy();
    expect(RegexMobileUtil('9367512465')).toBeFalsy();
    expect(RegexMobileUtil('9148980692')).toBeFalsy();

  })
})